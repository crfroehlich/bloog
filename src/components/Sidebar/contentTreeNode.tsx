import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../images/opened' was resolved to '/mnt... Remove this comment to see the full error message
import OpenedSvg from '../../images/opened';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../images/closed' was resolved to '/mnt... Remove this comment to see the full error message
import ClosedSvg from '../../images/closed';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import config from 'config';
// @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'Link'.
import { Link } from '..';
import { css } from '@emotion/react';

import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
// @ts-expect-error ts-migrate(2306) FIXME: File '/mnt/k/code/scratchpads/BooGi/src/utils/emoj... Remove this comment to see the full error message
import emoji from '../../utils/emoji';

// If you want to have a css call based on props, create a function that returns a css call like this
// let dynamicStyle = (props) => css`color: ${props.color}`
// It can be called directly with props or interpolated in a styled call like this
// let SomeComponent = styled('div')`${dynamicStyle}`

const activeNode = (theme: any) => css`
  border: 1px solid ${theme.navigationSidebar.row.activeBorder};
  border-right: none;
  > a,
  button {
    padding: 7px 23px 7px 17px;
    background-color: ${theme.navigationSidebar.row.active};
    color: ${theme.navigationSidebar.font.active} !important;
  }
`;

const ContentLink = styled(({
  className,
  link,
  children
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Link to={link} className={className}>
    {children}
  </Link>
))`
  color: ${(props) => props.theme.navigationSidebar.font.base};
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  padding: 8px 24px 8px 18px;
  border-radius: 1px;
`;

const NodeContent = styled(({
  className,
  text,
  link,
  children
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <li className={className}>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    {text && <ContentLink link={link}>{text}</ContentLink>}
    {children}
  </li>
))`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;
  justify-content: space-between;
  > a,
  > button {
    transition: ${(props) => props.theme.transitions.hover};
  }
  &:hover {
    > a,
    > button {
      background-color: ${(props) => props.theme.navigationSidebar.row.hover};
    }
  }
`;

const NestedContentTreeNode = styled(
  ({
    className,
    location,
    children,
    setCollapsed,
    collapsed
  }: any) => (
    //<Slide top>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ul className={className}>
      {children.map((item: any,i: any) => (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ContentTreeNode
          key={`${item.url}_${i}`}
          setCollapsed={setCollapsed}
          collapsed={collapsed}
          location={location}
          {...item}
        />
      ))}
    </ul>
  )
  //</Slide>
)`
  flex: 100%;
  li {
    margin-left: 16px;
    border-left: 1px solid ${(props) => props.theme.navigationSidebar.font.nested};
    a {
      color: ${(props) => props.theme.navigationSidebar.font.nested};
    }
  }
`;

const NodeCollapseButton = styled(({
  className,
  isCollapsed,
  collapse
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <button onClick={collapse} aria-label="collapse" className={className}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
    </button>
  );
})`
  background: transparent;
  border: none;
  outline: none;
  z-index: 10;
  cursor: pointer;
  padding: 0 25px 0 10px;
  svg path {
    fill: ${(props) => props.theme.navigationSidebar.font.base};
  }
  &:hover {
    svg path {
      fill: ${(props) => props.theme.navigationSidebar.row.collapseHover};
    }
  }
`;

const ContentTreeNode = ({
  className,
  toggle,
  collapsed,
  url,
  title,
  location,
  children
}: any) => {
  const hasChildren = children.length !== 0;
  const active =
    location &&
    (location.pathname === url ||
      location.pathname === url + '/' ||
      location.pathname === config.metadata.pathPrefix + url);
  const collapse = () => {
    toggle(url);
  };
  const theme = useTheme();
  let isCollapsed = collapsed[url];
  const text = emoji.emojify(title);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <NodeContent
        text={text}
        link={url}
        className={className}
        css={active ? activeNode(theme) : ''}
      >
        {title && hasChildren ? (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <NodeCollapseButton isCollapsed={isCollapsed} collapse={collapse} />
          </>
        ) : null}
      </NodeContent>

      {!isCollapsed ? (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NestedContentTreeNode collapsed={collapsed} location={location} setCollapsed={toggle}>
          {children}
        </NestedContentTreeNode>
      ) : null}
    </>
  );
};
export default ContentTreeNode;
