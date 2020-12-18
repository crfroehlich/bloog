import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Link } from '..';
import config from '../../../.config';
import { ClosedSvg } from '../../images/closed';
import { OpenedSvg } from '../../images/opened';
import { getTheme } from '../../theme';
import { emojiTools as emoji } from '../../utils/emoji';
import { Empty } from '../Empty';

const { navigationSidebar, transitions } = getTheme();

// If you want to have a css call based on props, create a function that returns a css call like this
// let dynamicStyle = (props) => css`color: ${props.color}`
// It can be called directly with props or interpolated in a styled call like this
// let SomeComponent = styled('div')`${dynamicStyle}`

const activeNode = () => css`
  border: 1px solid ${navigationSidebar.row.activeBorder};
  border-right: none;
  > a,
  button {
    padding: 7px 23px 7px 17px;
    background-color: ${navigationSidebar.row.active};
    color: ${navigationSidebar.fond?.active} !important;
  }
`;

const ContentLink = styled(({ className, link, children }: any) => (
  <Link to={link} className={className}>
    {children}
  </Link>
))`
  color: ${navigationSidebar.fond?.base};
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  padding: 8px 24px 8px 18px;
  border-radius: 1px;
`;

const NodeContent = styled(({ className, text, link, children }: any) => (
  <li className={className}>
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
    transition: ${transitions.hover};
  }
  &:hover {
    > a,
    > button {
      background-color: ${navigationSidebar.row.hover};
    }
  }
`;

const NestedContentTreeNode = styled(
  ({ className, location, children, setCollapsed, collapsed }: any) => (
    // <Slide top>

    <ul className={className}>
      {children.map((item: any, i: any) => (
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
  // </Slide>
)`
  flex: 100%;
  li {
    margin-left: 16px;
    border-left: 1px solid ${navigationSidebar.fond?.nested};
    a {
      color: ${navigationSidebar.fond?.nested};
    }
  }
`;

const NodeCollapseButton = styled(({ className, isCollapsed, collapse }: any) => {
  return (
    <button onClick={collapse} aria-label="collapse" className={className}>
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
    fill: ${navigationSidebar.fond?.base};
  }
  &:hover {
    svg path {
      fill: ${navigationSidebar.row.collapseHover};
    }
  }
`;

export const ContentTreeNode = ({
  className,
  toggle,
  collapsed,
  url,
  title,
  location,
  children,
}: any) => {
  const hasChildren = children.length !== 0;
  const active =
    location &&
    (location.pathname === url ||
      location.pathname === `${url}/` ||
      location.pathname === config.metadata.pathPrefix + url);
  const collapse = () => {
    toggle(url);
  };
  const isCollapsed = collapsed[url];
  const text = emoji.emojify(title);
  return (
    <div>
      <NodeContent text={text} link={url} className={className} css={active ? activeNode() : ''}>
        {title && hasChildren ? (
          <NodeCollapseButton isCollapsed={isCollapsed} collapse={collapse} />
        ) : (
          <Empty />
        )}
      </NodeContent>

      {!isCollapsed ? (
        <NestedContentTreeNode collapsed={collapsed} location={location} setCollapsed={toggle}>
          {children}
        </NestedContentTreeNode>
      ) : (
        <Empty />
      )}
    </div>
  );
};
