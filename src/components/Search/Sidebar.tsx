/* eslint-disable react/display-name */
import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { X } from 'react-feather';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module '@loa... Remove this comment to see the full error message
import loadable from '@loadable/component';

import { onMobile } from '../../styles/responsive';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../styles' was resolved to '/mnt/k/code... Remove this comment to see the full error message
import { visibleMobile } from '../../styles';

// @ts-expect-error ts-migrate(6142) FIXME: Module './localsearch' was resolved to '/mnt/k/cod... Remove this comment to see the full error message
const LocalSearch = loadable(() => import('./localsearch'))

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const SearchSidebar = styled.div`
  display: block; //${(props) => (props.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'show' does not exist on type '{ theme?: ... Remove this comment to see the full error message
show ? 'block' : 'none')};
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
const Search = React.forwardRef(({ onVisibleChange, closeSelf, ...props }, ref) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SearchSidebar {...props} ref={ref}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <SearchWrapper {...props}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CloseSearch css={visibleMobile} onClick={closeSelf}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <X />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <span css={{marginLeft: '5px'}}>Close</span>
        </CloseSearch>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <LocalSearch inputRef={ref} />
      </SearchWrapper>
    </SearchSidebar>
  );
});

export default Search;
