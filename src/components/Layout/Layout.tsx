import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';
import {
  Header,
  MdxComponents,
  SearchSidebar,
  ScrollTop,
  Sidebar,
  TableOfContents,
  ThemeProvider,
} from '..';

import { getConf } from '../../utils';
import React, { useRef, useEffect, useState } from 'react';
import { Slide } from 'react-reveal';
import { hiddenMobile, hiddenTablet } from '../../styles/styles';
import { onMobile, onTablet } from '../../styles/responsive';
import 'css';

const config = getConf();

const Wrapper = styled.div`
  display: flex;
  overflow-wrap: anywhere;
  justify-content: space-between;
  position: relative;

  ${onMobile} {
    min-height: 95vh;
  }
`;

const Content = styled('main')`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 50px 70px;
  background-color: ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'content' does not exist on type 'Theme'.
content.background};

  ${onTablet} {
    padding: 30px;
  }
  ${onMobile} {
    padding: 15px;
  }
`;

/**
 * Hook that alerts clicks outside of the passed ref
 */
function actOnClose(ref: any, onClose: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose(ref.current);
      }
    }

    function handleEscape(event: any) {
      if (event.key === 'Escape') {
        onClose(ref.current);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [ref]);
}

export const Layout = ({
  children,
  location
}: any) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [fullscreenMode, setFullScreenMode] = useState(false);
  const themeProviderRef = React.createRef();
  const searchSidebarRef = useRef(null);
  const closeSearch = () => setShowSearch(false);
  actOnClose(searchSidebarRef, closeSearch);

  return (
    
    <ThemeProvider ref={themeProviderRef} darkModeConfig={config.features.darkMode}>
      <div
        css={{
          zIndex: 20,
          position: 'relative',
          display: showSearch || searchVisible ? 'block' : 'none',
        }}
      >
        <Slide right delay={0} duration={400} when={showSearch}>
          <SearchSidebar ref={searchSidebarRef} {...{closeSelf: closeSearch, onVisibleChange: setSearchVisible}} />
        </Slide>
      </div>
      
      <Header
        show={! (config.features.fullScreenMode.hideHeader && fullscreenMode)}
        location={location}
        setShowSearch={setShowSearch}
        themeProvider={themeProviderRef}
        toggleFullscreenMode={() => setFullScreenMode(!fullscreenMode)}
      />
      
      <MDXProvider components={MdxComponents}>
        
        {config.features.scrollTop === true ? <ScrollTop /> : ''}
        
        <Wrapper>
          <Sidebar show={! (config.features.fullScreenMode.hideSidebar && fullscreenMode)} location={location} css={hiddenMobile} />
          <Content>{children}</Content>
          <TableOfContents show={! (config.features.fullScreenMode.hideToc && fullscreenMode)} location={location} css={hiddenTablet} />
        </Wrapper>
      </MDXProvider>
    </ThemeProvider>
  );
};