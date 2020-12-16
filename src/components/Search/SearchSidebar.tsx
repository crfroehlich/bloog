/* eslint-disable react/display-name */
import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { X } from 'react-feather';
import loadable from '@loadable/component';
import { onMobile } from '../../styles/responsive';
import { visibleMobile } from '../../styles/styles';

// @ts-expect-error ts-migrate(6142) FIXME: Module './localsearch/LocalSearch' was resolved to... Remove this comment to see the full error message
const LoadableLocalSearch = loadable<LocalSearch>(() => import('./localsearch/LocalSearch'))

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const SearchSidebarWrapper = styled(({ ...props }) => (<div {...props} />))`
  display: block; //${(props) => (props.show ? 'block' : 'none')};
  z-index: 20;
  height: 100vh;
  position: fixed;
  right: 0;
  left: auto;
  top: 0;
  width: 480px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  background: ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.background};
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
  box-shadow: 0 3px 8px 0 ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.shadow};
  border-bottom: 1px solid ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.border};
  svg {
    width: 1.2em;
  }
  &:hover {
    color: ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.hover};
    svg {
      stroke: ${(props) => props.theme.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.hover};
    }
  }
`;

// @ts-expect-error ts-migrate(2339) FIXME: Property 'onVisibleChange' does not exist on type ... Remove this comment to see the full error message
export const SearchSidebar = React.forwardRef(({ onVisibleChange, closeSelf, ...props }, ref) => {
  return (
    <SearchSidebarWrapper {...props} ref={ref}>
      <SearchWrapper {...props}>
        <CloseSearch css={visibleMobile} onClick={closeSelf}>
          <X />
          <span css={{marginLeft: '5px'}}>Close</span>
        </CloseSearch>
        <LoadableLocalSearch inputRef={ref} />
      </SearchWrapper>
    </SearchSidebarWrapper>
  );
});