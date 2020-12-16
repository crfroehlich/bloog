import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { AlignRight } from 'react-feather';
import Scrollspy from 'react-scrollspy';
import { sleep } from '../../utils/utils';
import { scrollbar } from '../../styles/styles';
import emoji from '../../utils/emoji';
import config from '../../../.config';
import { getTheme } from '../../theme';

const { tableOfContents, transitions } = getTheme();

const Sidebar = styled(({ show, ...props }) => (<aside {...props} />))`
  background-color: ${tableOfContents?.background};
  display: ${(props) => props.show ? 'block' : 'none'};
  min-width: 260px;
  height: 100vh;
  overflow: auto;
  padding: 50px 15px 0 5px;
  position: sticky;
  top: 0;

  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }

  li {
    list-style-type: none;
    a {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.5;
      padding: 5px 24px 5px 16px;
      color: ${tableOfContents.fond?.base};
      text-decoration: none;
      display: block;
      position: relative;
      border-left: 1px solid ${tableOfContents.border};
      transition: ${transitions.hover};
    }

    &:hover {
      a {
        border-left-color: ${tableOfContents.fond?.hover};
        color: ${tableOfContents.fond?.hover} !important;
      }
    }
  }
  .currentItem {
    a {
      border-left: 2px solid ${tableOfContents.fond?.current} !important;
      color: ${tableOfContents.fond?.current} !important;
    }
  }
`;

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({
  className,
  active,
  level,
  children,
  ...props
}: any) => {
  return (
    <li className={className}>
      <a href={props.to} {...props}>
        {children}
      </a>
    </li>
  );
})`
  a {
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding-left: ${(props) => (props.level || 0) * 0.85}rem !important;
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;

const TocTitle = styled(({
  className
}: any) => {
  return (
    
    <span className={className}>
      
      <AlignRight size={15} />
      Contents
    </span>
  );
})`
  font-size: 10px;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 7px 24px 7px 16px;
  border-left: 1px solid ${tableOfContents.border};
  color: ${tableOfContents.fond?.base};
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
  }
`;

const buildToC = (item: any, items: any, maxDepth: any, depth: any) => {
  if (item.items) {
    item.items.forEach((innerItem: any, i: any) => {
      if (depth > maxDepth) {
        return;
      }
      const itemId = innerItem.title
        ? emoji.clean(innerItem.title).replace(/\s+/g, '').toLowerCase()
        : '#';
      const title = emoji.emojify(innerItem.title);
      let listItem = (
        
        <ListItem key={`${items.length}_${i}`} to={`#${itemId}`} level={depth}>
          {title}
        </ListItem>
      );
      items.push(listItem);
      buildToC(innerItem, items, maxDepth, depth + 1);
    });
  }
};

const generateToCItems = (allMdx: any, location: any) => {
  let finalNavItems: any = [];
  const isCurrentPage = (slug: any) => slug === location.pathname || config.metadata.pathPrefix + slug === location.pathname;
  const showToc = (showToc: any) => (config.features.toc.show === true && showToc !== false) || showToc === true;

  if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
    allMdx.edges.every((item: any) => {
      let innerItems: any = [];
      if (item !== undefined) {
        if (isCurrentPage(item.node.fields.slug) && showToc(item.node.frontmatter.showToc)) {
          const maxDepth = item.node.frontmatter.tocDepth
            ? item.node.frontmatter.tocDepth
            : config.features.toc.depth;
          buildToC(item.node.tableOfContents, innerItems, maxDepth, 1);
        }
      }
      if (innerItems.length > 0) {
        finalNavItems = innerItems;
        return false;
      }
      return true;
    });
  }
  return finalNavItems;
};

const tocItemsEqual = (items: any, targetItems: any) => {
  if (items === targetItems) return true;
  if (items == null || targetItems == null) return false;
  if (items.length != targetItems.length) return false;

  for (var i = 0; i < items.length; ++i) {
    let target = targetItems[i];
    if (targetItems[i]) {
      target = target.id;
    }
    if (items[i] !== target) return false;
  }
  return true;
};

export const TableOfContents = (props) => {
  const {
    show,
    className,
    location
  } = props;
  const allMdx = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            tableOfContents

            frontmatter {
              showToc
              tocDepth
            }
          }
        }
      }
    }
  `);
    
  const finalNavItems = generateToCItems(allMdx, location);
  let ids = finalNavItems.map((item) => {
    return item.props.to.substr(1);
  });
  const scrollspyRef: any = React.createRef();
  const refresh = () => {
    // This function is a workaround for a problem when scrollspy items get updated.
    // In such case props are updated properly, but state is kept stale causing
    // scrollspy to not follow content properly. To fix it, we need to manually
    // trigger scrollspy reinitialization when its props change.
    if (
      scrollspyRef.current &&
      !tocItemsEqual(scrollspyRef.current.props.items, scrollspyRef.current.state.targetItems)
    ) {
      sleep(200).then(() => {
        if (scrollspyRef.current) {
          scrollspyRef.current._initFromProps();
        } else {
          refresh();
        }
      });
    }
  };
  return (
    <Sidebar show={show} className={className} css={scrollbar}>
      <TocTitle>Contents</TocTitle>
      <Scrollspy
        ref={scrollspyRef}
        onUpdate={refresh}
        items={ids}
        currentClassName={'currentItem'}
      >
        {finalNavItems}
      </Scrollspy>
    </Sidebar>
  );
}
