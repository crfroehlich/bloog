/* eslint-disable react/display-name */
import styled from '@emotion/styled';
import loadable from '@loadable/component';
import React from 'react';
import { X } from 'react-feather';
import { onMobile } from '../../styles/responsive';
import { visibleMobile } from '../../styles/styles';
import { getTheme } from '../../theme';

const { colors } = getTheme();

const LoadableLocalSearch = loadable(() => import('./LocalSearch'));

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const SearchSidebarWrapper = styled(({ inputRef, ...props }) => <div {...props} />)`
  display: block; //${(props) => (props.show ? 'block' : 'none')};
  z-index: 20;
  height: 100vh;
  position: fixed;
  right: 0;
  left: auto;
  top: 0;
  width: 480px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  background: ${colors?.background};
  ${onMobile} {
    width: 100%;
  }
`;
const CloseSearch = styled.div`
  padding: 14px;
  margin-bottom: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 3px 8px 0 ${colors.shadow};
  border-bottom: 1px solid ${colors.border};
  svg {
    width: 1.2em;
  }
  &:hover {
    color: ${colors.hover};
    svg {
      stroke: ${colors.hover};
    }
  }
`;

export const SearchSidebar = ({ onVisibleChange, closeSelf, inputRef, ...props }) => {
  return (
    <SearchSidebarWrapper {...props} inputRef={inputRef}>
      <SearchWrapper {...props}>
        <CloseSearch css={visibleMobile} onClick={closeSelf}>
          <X />
          <span css={{ marginLeft: '5px' }}>Close</span>
        </CloseSearch>
        <LoadableLocalSearch inputRef={inputRef} />
      </SearchWrapper>
    </SearchSidebarWrapper>
  );
};
