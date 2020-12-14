import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { AlignRight } from 'react-feather';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import { config } from 'config';
import Scrollspy from 'react-scrollspy';
import { sleep } from '../../utils/utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../styles/styles' was resolved to '/hom... Remove this comment to see the full error message
import { scrollbar } from '../../styles/styles';
import emoji from '../../utils/emoji';

const Sidebar = styled.aside`
  background-color: ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'tableOfContents' does not exist on type ... Remove this comment to see the full error message
tableOfContents.background};
  display: ${(props) => props.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'show' does not exist on type '{ theme?: ... Remove this comment to see the full error message
show ? 'block' : 'none'};
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
      color: ${(props) => props.theme.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'tableOfContents' does not exist on type ... Remove this comment to see the full error message
tableOfContents.font.base};
      text-decoration: none;
      display: block;
      position: relative;
      border-left: 1px solid ${(props) => props.theme.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'tableOfContents' does not exist on type ... Remove this comment to see the full error message
tableOfContents.border};
      transition: ${(props) => props.theme.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'transitions' does not exist on type 'The... Remove this comment to see the full error message
transitions.hover};
    }

    &:hover {
      a {
        border-left-color: ${(props) => props.theme.        
// @ts-expect-error ts-migrate(2339) FIXME: Property 'tableOfContents' does not exist on type ... Remove this comment to see the full error message
tableOfContents.font.hover};
        color: ${(props) => props.theme.        
// @ts-expect-error ts-migrate(2339) FIXME: Property 'tableOfContents' does not exist on type ... Remove this comment to see the full error message
tableOfContents.font.hover} !important;
      }
    }
  }
  .currentItem {
    a {
      border-left: 2px solid ${(props) => props.theme.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'tableOfContents' does not exist on type ... Remove this comment to see the full error message
tableOfContents.font.current} !important;
      color: ${(props) => props.theme.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'tableOfContents' does not exist on type ... Remove this comment to see the full error message
tableOfContents.font.current} !important;
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <li className={className}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span className={className}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
  border-left: 1px solid ${(props) => props.theme.tableOfContents.border};
  color: ${(props) => props.theme.tableOfContents.font.base};
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
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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

export const TableOfContents = ({
  show,
  className,
  location
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <StaticQuery
    query={graphql`
      query {
        allMdx(filter: {fields: {draft: {ne: true}}}) {
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
    `}
    render={({ allMdx }) => {
      const finalNavItems = generateToCItems(allMdx, location);
      if (finalNavItems.length > 0) {
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
        let ids = finalNavItems.map((item) => {
          return item.props.to.substr(1);
        });
        const scrollspyRef = React.createRef();
        const refresh = () => {
          // This function is a workaround for a problem when scrollspy items get updated.
          // In such case props are updated properly, but state is kept stale causing
          // scrollspy to not follow content properly. To fix it, we need to manually
          // trigger scrollspy reinitialization when its props change.
          if (
            scrollspyRef.current &&
            // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
            !tocItemsEqual(scrollspyRef.current.props.items, scrollspyRef.current.state.targetItems)
          ) {
            sleep(200).then(() => {
              if (scrollspyRef.current) {
                // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
                scrollspyRef.current._initFromProps();
              } else {
                refresh();
              }
            });
          }
        };
        return (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Sidebar show={show} className={className} css={scrollbar}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TocTitle>Contents</TocTitle>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Scrollspy
              // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
              ref={scrollspyRef}
              onUpdate={refresh}
              items={ids}
              currentClassName={'currentItem'}
            >
              {finalNavItems}
            </Scrollspy>
          </Sidebar>
        );
      } else {
        return null;
      }
    }}
  />
);
