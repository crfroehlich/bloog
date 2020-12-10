import { useStaticQuery, graphql } from 'gatsby';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import config from 'config';

const getNavigationData = () => {
  const { allMdx } = useStaticQuery(graphql`
    query NavigationQuery {
      allMdx(filter: {fields: {draft: {ne: true}}}) {
        edges {
          node {
            fields {
              slug
              title
            }
            frontmatter {
              order
            }
          }
        }
      }
    }
  `);
  return allMdx.edges;
};

const getGroup = function (url: any) {
  return url ? config.sidebar.groups.find((group: any) => url.startsWith(group.path)) : null;
};

const createUnassignedGroup = () => {
  return {
    title: '',
    icon: null,
    order: 0,
    id: '__root',
    children: [],
  };
};

const calculateTreeDataForData = (contentData: any) => {
  let navigationItems = contentData
    .map((data: any) => data.node)
    .map((node: any) => {
      let parts = node.fields.slug.substr(1).split('/');
      const label = parts.join('');
      parts = parts.splice(0, parts.length - 1);
      let parents: any = [];
      parts.forEach((part: any, index: any) => {
        let v = '/' + part;
        if (parents[index - 1]) {
          v = parents[index - 1] + v;
        }
        parents.push(v);
      });
      return {
        parent: parents.reverse(),
        label: label,
        url: node.fields.slug,
        children: [],
        title: node.fields.title,
        order: node.frontmatter.order,
      };
    });

  navigationItems.sort(function (a: any, b: any) {
    let aIdx = config.sidebar.forcedNavOrder.indexOf(a.url);
    let bIdx = config.sidebar.forcedNavOrder.indexOf(b.url);
    const forcedOrder = aIdx - bIdx;
    if (forcedOrder !== 0) {
      return forcedOrder;
    }
    const frontOrder = a.order - b.order;
    return frontOrder !== 0 ? frontOrder : a.label.localeCompare(b.label);
  });

  let result = {
    __root: createUnassignedGroup(),
  };
  navigationItems.forEach((data: any) => {
    let isChild = false;
    let parent = null;
    data.parent.every((p: any) => {
      parent = navigationItems.find((d: any) => d.url === p);
      if (parent) {
        parent.children.push(data);
        isChild = true;
        data.parent = parent.url;
        return false;
      }
      return true;
    });
    if (parent) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type 'never'.
      data.parent = parent.title;
    } else {
      data.parent = null;
    }
    if (!isChild) {
      // assume first level of navigation entry URL may be ID (path) of a group
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      let group = result[data.url.split('/')[1].toLowerCase()];
      if (group == null) {
        group = group ? group : getGroup(data.url);
        if (!group) {
          group = result['__root'];
        } else {
          group = {
            title: group ? group.title : '',
            icon: group ? group.icon : null,
            order: group ? group.order : 0,
            // assume group have 1 level, e.g. /config
            id: group ? group.path.replace(/^\//, '').toLowerCase() : null,
            children: [],
          };
          // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
          result[group.id] = group;
        }
      }
      data.groupName = group.title;
      data.groupIcon = group.icon;
      data.children.forEach((child: any) => {
        child.groupName = group.title;
        child.groupIcon = group.icon;
      });
      group.children.push(data);
    }
  });
  // @ts-expect-error ts-migrate(2741) FIXME: Property '__root' is missing in type '{ title: str... Remove this comment to see the full error message
  result = Object.values(result);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'sort' does not exist on type '{ __root: ... Remove this comment to see the full error message
  result.sort(function (a: any, b: any) {
    const ordered = a.order - b.order;
    return ordered !== 0 ? ordered : a.title.localeCompare(b.title);
  });
  return result;
};

const calculateNavigation = (edges: any) => {
  const contentData = config.sidebar.ignoreIndex
    ? edges.filter(
        ({
          node: {
            fields: { slug },
          }
        }: any) => slug !== '/'
      )
    : edges;
  const data = calculateTreeDataForData(contentData);
  return {
    children: data,
  };
};

const flat = (parent: any, acc: any) => {
  parent.children.forEach((child: any) => {
    acc.push(child);
    flat(child, acc);
  })
}

const calculateFlatNavigation = (edges: any) => {
  const navigation = calculateNavigation(edges);
  const acc: any = [];
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'forEach' does not exist on type '{ __roo... Remove this comment to see the full error message
  navigation.children.forEach((group: any) => {
    flat(group, acc)
  })
  return acc;;
};

export { getNavigationData, calculateNavigation, calculateFlatNavigation };
