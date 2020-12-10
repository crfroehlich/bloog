import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './contentTreeNode' was resolved to '/mnt/k... Remove this comment to see the full error message
import ContentTreeNode from './contentTreeNode';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import config from 'config';
import styled from '@emotion/styled';
// @ts-expect-error ts-migrate(2306) FIXME: File '/mnt/k/code/scratchpads/BooGi/src/utils/emoj... Remove this comment to see the full error message
import emoji from '../../utils/emoji';

const ContentTreeGroup = styled(({
  className,
  treeState,
  title,
  icon,
  location,
  children
}: any) => {
  children.forEach((item: any) => {
    const alreadyExpanded = treeState.collapsed[item.url] === false;
    const expanded =
      alreadyExpanded ||
      location.pathname === item.url ||
      location.pathname === item.url + '/' ||
      item.children.some((child: any) => child.url === location.pathname) ||
      (config.sidebar.expanded && config.sidebar.expanded.includes(item.url));

    treeState.collapsed[item.url] = !expanded;
  });
  const toggle = (url: any) => {
    treeState.setCollapsed({
      ...treeState.collapsed,
      [url]: !treeState.collapsed[url],
    });
  };
  const emojified = emoji.emojify(title);
  return (
    // {...item}
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={className}>
      {title ? (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <span>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            {icon ? <img src={icon} alt={`group ${emojified}`} loading={'lazy'} /> : null}{' '}
            {emojified}
          </span>
        </>
      ) : null}
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ul>
        {children.map((child: any,i: any) => (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ContentTreeNode
            key={`${child.url}_${i}`}
            toggle={toggle}
            collapsed={treeState.collapsed}
            location={location}
            {...child}
          />
        ))}
      </ul>
    </div>
  );
})`
  display: block;
  padding: 0;
  position: relative;
  margin-bottom: 24px;
  span {
    padding: 5px 16px;
    font-size: 13px;
    font-family: Content-font, Roboto, sans-serif;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    position: relative;
    color: ${(props) => props.theme.navigationSidebar.font.group};
  }
  > span {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    img {
      width: 18px;
      margin-right: 7px;
    }
  }
`;

export default ContentTreeGroup;
