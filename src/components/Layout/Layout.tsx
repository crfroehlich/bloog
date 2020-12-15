import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';
import {
  // @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'Header'.
  Header,
  // @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'MdxComponent... Remove this comment to see the full error message
  MdxComponents,
  // @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'SearchSideba... Remove this comment to see the full error message
  SearchSidebar,
  // @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'ScrollTop'.
  ScrollTop,
  // @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'Sidebar'.
  Sidebar,
  // @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'TableOfConte... Remove this comment to see the full error message
  TableOfContents,
  // @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'ThemeProvide... Remove this comment to see the full error message
  ThemeProvider,
} from '..';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import { config } from 'config';
import React, { useRef, useEffect, useState } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Slide } from 'react-reveal';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../styles/styles' was resolved to '/hom... Remove this comment to see the full error message
import { hiddenMobile, hiddenTablet } from '../../styles/styles';
import { onMobile, onTablet } from '../../styles/responsive';
import 'css';

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
      {config.header.enabled === true ? (
        
        <>
          
          <div
            // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: Element; css: { zIndex: number; ... Remove this comment to see the full error message
            css={{
              zIndex: 20,
              position: 'relative',
              display: showSearch || searchVisible ? 'block' : 'none',
            }}
          >
            
            <Slide right delay={0} duration={400} when={showSearch}>
              
              <SearchSidebar ref={searchSidebarRef} onVisibleChange={setSearchVisible} closeSelf={closeSearch} />
            </Slide>
          </div>
          
          <Header
            show={! (config.features.fullScreenMode.hideHeader && fullscreenMode)}
            location={location}
            setShowSearch={setShowSearch}
            themeProvider={themeProviderRef}
            toggleFullscreenMode={() => setFullScreenMode(!fullscreenMode)}
          />
        </>
      ) : (
        ''
      )}
      
      <MDXProvider components={MdxComponents}>
        
        {config.features.scrollTop === true ? <ScrollTop /> : ''}
        
        <Wrapper>
          {config.sidebar.enabled === true ? (
            
            <Sidebar show={! (config.features.fullScreenMode.hideSidebar && fullscreenMode)} location={location} css={hiddenMobile} />
          ) : (
            ''
          )}
          
          <Content>{children}</Content>
          
          <TableOfContents show={! (config.features.fullScreenMode.hideToc && fullscreenMode)} location={location} css={hiddenTablet} />
        </Wrapper>
      </MDXProvider>
    </ThemeProvider>
  );
};
