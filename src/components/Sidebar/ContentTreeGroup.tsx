import styled from '@emotion/styled';
import React from 'react';
import config from '../../../.config';
import { getTheme } from '../../theme';
import { emojiTools } from '../../utils/emoji';
import { Empty } from '../Empty';
import { ContentTreeNode } from './ContentTreeNode';

const { navigationSidebar } = getTheme();

export const ContentTreeGroup = styled(
  ({ className, treeState, title, icon, location, children }: any) => {
    children.forEach((item: any) => {
      const alreadyExpanded = treeState.collapsed[item.url] === false;
      const expanded =
        alreadyExpanded ||
        location.pathname === item.url ||
        location.pathname === `${item.url}/` ||
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
    const emojified = emojiTools.emojify(title);
    return (
      // {...item}

      <div className={className}>
        {title ? (
          <span>
            {icon ? <img src={icon} alt={`group ${emojified}`} loading={'lazy'} /> : <Empty />}{' '}
            {emojified}
          </span>
        ) : (
          <Empty />
        )}
        <ul>
          {children.map((child: any, i: any) => (
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
  }
)`
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
    color: ${navigationSidebar.fond?.group};
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
