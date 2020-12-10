import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import config from 'config';
// @ts-expect-error ts-migrate(6142) FIXME: Module './logo' was resolved to '/mnt/k/code/scrat... Remove this comment to see the full error message
import Logo from './logo';
// @ts-expect-error ts-migrate(6142) FIXME: Module './navigation' was resolved to '/mnt/k/code... Remove this comment to see the full error message
import Navigation from './navigation';
// @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'DarkModeSwit... Remove this comment to see the full error message
import { ButtonIcon, DarkModeSwitch, SearchInput, Sidebar } from '..';
import { HelpCircle, Menu, Search } from 'react-feather';
import { useTheme } from '@emotion/react';
import SocialButtons from './social';
// @ts-expect-error ts-migrate(2305) FIXME: Module '"../Buttons"' has no exported member 'Rss'... Remove this comment to see the full error message
import { Rss } from '../Buttons';
import { globalHistory } from '@reach/router';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../styles' was resolved to '/mnt/k/code... Remove this comment to see the full error message
import { hiddenMobile, visibleMobile, visibleTablet, hiddenTablet } from '../../styles';
import { onMobile, onTablet, isMobile } from '../../styles/responsive';
// @ts-expect-error ts-migrate(6142) FIXME: Module './fullscreen' was resolved to '/mnt/k/code... Remove this comment to see the full error message
import { FullScreenClose, FullScreenEnter, FullScreenHeader } from './fullscreen';

const isSearchEnabled = config.features.search && config.features.search.enabled;

const SearchWrapper = styled.div`
  padding-left: 20px;
  flex: 1 1 auto;
  position: relative;
  min-width: 200px;
  max-width: 280px;
  border-left: 1px solid ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
header.border};
  ${onTablet} {
    padding-left: 0;
  }
  ${onMobile} {
    padding: 20px 0 0;
    width: calc(100% - 30px);
  }
  a {
    font-weight: 500;
  }
`;

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
header.background};
  border-radius: 0;
  margin-bottom: 0;
  border: 0;
  display: ${(props) => (props.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'show' does not exist on type '{ theme?: ... Remove this comment to see the full error message
show ? 'flex' : 'none')};
  align-items: center;
  box-shadow: 0 3px 8px 0 ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
header.shadow};
  border-bottom: 1px solid ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
header.border};
  padding: 10px 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  ${onTablet} {
    padding: 10px;
  }
  ${onMobile} {
    flex-wrap: wrap;
  }
`;

const TopNavigation = styled.div`
  -webkit-transition: top 0.5s, bottom 0.5s;
  transition: top 0.5s, bottom 0.5s;
  margin-left: 55px;
  margin-right: 30px;
  flex: 1 1 auto;
  padding: 10px 0;
  ${onTablet} {
    margin-left: 15px;
  }
  ${onMobile} {
    &.responsive {
      .visibleMobile {
        display: block;
      }

      ul {
        display: block;
        text-align: left;
      }
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex: auto;
  justify-content: flex-end;
  align-items: center;
  min-width: 458px;
  margin-right: 25px;
  ${onTablet} {
    margin-right: 10px !important;
    min-width: auto;
  }
  a,
  > div {
    margin: 0 6px;
  }
`;

const SearchOpener = ({
  open,
  forcedComponent,
  ...props
}: any) => {
  const theme = useTheme();
  const method = forcedComponent || config.features.search.startComponent;
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  let opener = <div></div>;
  switch (method.toLowerCase()) {
    case 'input':
      opener = (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SearchWrapper css={hiddenMobile} style={{ marginRight: '10px' }} {...props}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <SearchInput style={{marginTop: '0', marginBottom: '0'}} onChange={(e: any) => e.target.value = ''} onFocus={open} />
        </SearchWrapper>
      );
      break;
    case 'icon':
      opener = (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ButtonIcon
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
          background={theme.header.icons.background}
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
          hoverStroke={theme.header.icons.hover}
          fill={'transparent'}
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
          stroke={theme.header.icons.stroke}
          icon={Search}
          onClick={open}
          {...props}
        />
      );
      break;
    default:
      console.error(`Provided show component '${method}' is not supported. Use 'icon' or 'input'.`);
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      opener = <div></div>;
  }
  return opener;
};

const HelpButton = ({
  helpUrl,
  ...props
}: any) => {
  const theme = useTheme();
  const open = () => {
    const help = window.open(helpUrl, '_blank');
    // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
    help.focus();
  };
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ButtonIcon
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
      hoverStroke={theme.header.icons.hover}
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
      stroke={theme.header.icons.stroke}
      icon={HelpCircle}
      onClick={open}
      {...props}
    />
  );
};

const RssIcon = (iconBaseProps: any) => {
  if (config.features.rss && config.features.rss.enabled && config.features.rss.showIcon) {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Rss
        className={hiddenMobile}
        {...iconBaseProps}
        link={config.features.rss.outputPath}
        title={'RSS feed'}
      />
    );
  }
  return null;
};

const MobileNavigation = styled.div`
  display: ${(props) => (props.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'show' does not exist on type '{ theme?: ... Remove this comment to see the full error message
show ? 'flex' : 'none')} !important;
  flex-basis: 100%;
  flex-direction: column;
`;

const MobileMenuToggle = styled(({
  open,
  toggle,
  className,
  ...props
}: any) => {
  const theme = useTheme();
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={className} {...props}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ButtonIcon
        title={'Open menu'}
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
        background={theme.header.icons.background}
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
        hoverStroke={theme.header.icons.hover}
        fill={'transparent'}
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
        stroke={open === true ? theme.header.icons.hover : theme.header.icons.stroke}
        icon={Menu}
        onClick={toggle}
        {...props}
      />
    </div>
  );
})`
  display: none;
  ${onMobile} {
    display: flex;
  }
`;

const SocialButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  margin: 0 6px;
  ${onTablet} {
    justify-content: space-evenly;
    margin-top: 10px;
  }
`;

const Header = ({
  setShowSearch,
  location,
  themeProvider,
  show,
  toggleFullscreenMode
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            helpUrl
            logo {
              link
              image
            }
            headerLinks {
              link
              text
              external
            }
          }
        }
      }
    `}
    render={(data) => {
      const {
        site: {
          siteMetadata: { headerTitle, helpUrl, logo, headerLinks },
        },
      } = data;
      const logoLink = logo.link !== '' ? logo.link : '/';
      const logoImg = require('images/logo.svg');
      const [darkMode, setDarkMode] = useState(false);
      useEffect(() => {
        setDarkMode(themeProvider.current.retrieveActiveTheme());
      });

      const open = () => {
        setShowSearch(true);
      };
      const [menuOpen, setMenuOpen] = useState(false);

      const theme = useTheme();
      const iconBaseProps = {
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
        background: theme.header.icons.background,
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
        hoverStroke: theme.header.icons.hover,
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
        stroke: theme.header.icons.stroke,
      };
      const DarkModeButton = config.features.darkMode.enabled ? (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DarkModeSwitch
          {...iconBaseProps}
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
          hoverFill={theme.header.icons.hover}
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'header' does not exist on type 'Theme'.
          fill={theme.header.icons.fill}
          isDarkThemeActive={darkMode}
          toggleActiveTheme={() => {
            setDarkMode(themeProvider.current.toggleActiveTheme());
          }}
        />
      ) : (
        ''
      );
      const toggleMenuOpen = () => setMenuOpen(!menuOpen);
      globalHistory.listen((location) => {
        setMenuOpen(false);
        setShowSearch(false);
      });
      return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
          {config.features.fullScreenMode.enabled &&
          config.features.fullScreenMode.enabled === true ? (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <FullScreenHeader show={!show} css={hiddenMobile}>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <FullScreenClose toggle={toggleFullscreenMode} />
              {DarkModeButton}
            </FullScreenHeader>
          ) : (
            ''
          )}
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <HeaderWrapper show={show}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Logo link={logoLink} img={logoImg} title={headerTitle} />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TopNavigation css={hiddenMobile}>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Navigation links={headerLinks} />
            </TopNavigation>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ButtonsWrapper>
              {isSearchEnabled ? (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <>
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <SearchOpener open={open} forcedComponent={'icon'} css={visibleTablet} />
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <SearchOpener open={open} css={hiddenTablet} />
                </>
              ) : null}
              {helpUrl && helpUrl.length > 0 ? (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <HelpButton css={hiddenMobile} helpUrl={helpUrl} />
              ) : (
                ''
              )}
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <SocialButtonsWrapper css={hiddenMobile}>
                {SocialButtons(iconBaseProps, config.social)}
              </SocialButtonsWrapper>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <RssIcon {...iconBaseProps} />
              {config.features.fullScreenMode.enabled &&
              config.features.fullScreenMode.enabled === true ? (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <FullScreenEnter toggle={toggleFullscreenMode} css={hiddenMobile} />
              ) : (
                ''
              )}
              {DarkModeButton}
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <MobileMenuToggle toggle={toggleMenuOpen} open={menuOpen} />
            </ButtonsWrapper>

            {isMobile() ? (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <MobileNavigation css={visibleMobile} show={menuOpen}>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Sidebar location={location} show={true} />

                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Navigation links={headerLinks} />

                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <SocialButtonsWrapper css={visibleMobile}>
                  {SocialButtons(iconBaseProps, config.social)}
                </SocialButtonsWrapper>
              </MobileNavigation>
            ) : (
              ''
            )}
          </HeaderWrapper>
        </>
      );
    }}
  />
);

export default Header;
