/* eslint-disable react/display-name */
import styled from '@emotion/styled';
import { useRef } from 'react';
import { X } from 'react-feather';
import loadable from '@loadable/component';

import { onMobile } from '../../styles/responsive';
import { visibleMobile } from '../../styles/styles';
import { IComponentTheme } from '..';
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
  display: block; //${(props: IComponentTheme) => (props.show ? 'block' : 'none')};
  z-index: 20;
  height: 100vh;
  position: fixed;
  right: 0;
  left: auto;
  top: 0;
  width: 480px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  background: ${(props: IComponentTheme) => props.theme?.colors?.background};
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
  box-shadow: 0 3px 8px 0 ${(props: IComponentTheme) => props.theme?.colors?.shadow};
  border-bottom: 1px solid ${(props: IComponentTheme) => props.theme?.colors?.border};
  svg {
    width: 1.2em;
  }
  &:hover {
    color: ${(props: IComponentTheme) => props.theme?.colors?.hover};
    svg {
      stroke: ${(props: IComponentTheme) => props.theme?.colors?.hover};
    }
  }
`;

// @ts-expect-error ts-migrate(2339) FIXME: Property 'onVisibleChange' does not exist on type ... Remove this comment to see the full error message
export const Search = React.forwardRef(({ onVisibleChange, closeSelf, ...props }, ref) => {
  return (
    
    <SearchSidebar {...props} ref={ref}>
      
      <SearchWrapper {...props}>
        
        <CloseSearch css={visibleMobile} onClick={closeSelf}>
          
          <X />
          
          <span css={{marginLeft: '5px'}}>Close</span>
        </CloseSearch>
          
          <LocalSearch inputRef={ref} />
      </SearchWrapper>
    </SearchSidebar>
  );
});

export default Search;
