import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import config from '../../../.config';
import { Logo } from './logo';
import { Navigation } from './navigation';
import { ButtonIcon, DarkModeSwitch, SearchInput, Sidebar } from '..';
import { HelpCircle, Menu, Search } from 'react-feather';
import { social as SocialButtons } from './social';
import { Rss } from '../Buttons';
import { globalHistory } from '@reach/router';
import { hiddenMobile, visibleMobile, visibleTablet, hiddenTablet } from '../../styles/styles';
import { onMobile, onTablet, isMobile } from '../../styles/responsive';
import { FullScreenClose, FullScreenEnter, FullScreenHeader } from './fullscreen';
import { Empty } from '../Empty';
import { getTheme } from '../../theme';

const { header } = getTheme();

const isSearchEnabled = true;

const SearchWrapper = styled.div`
  padding-left: 20px;
  flex: 1 1 auto;
  position: relative;
  min-width: 200px;
  max-width: 280px;
  border-left: 1px solid ${() => header.border};
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

const HeaderWrapper = styled(({ show, ...props }) => (<header {...props} />))`
  background-color: ${() => header.background};
  border-radius: 0;
  margin-bottom: 0;
  border: 0;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;
  box-shadow: 0 3px 8px 0 ${() => header.shadow};
  border-bottom: 1px solid ${() => header.border};
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
  const method = forcedComponent || config.features.search.startComponent;
  
  let opener = <Empty />;
  switch (method.toLowerCase()) {
    case 'input':
      opener = (
        <SearchWrapper css={hiddenMobile} style={{ marginRight: '10px' }} {...props}>
          <SearchInput style={{marginTop: '0', marginBottom: '0'}} onChange={(e: any) => e.target.value = ''} onFocus={open} />
        </SearchWrapper>
      );
      break;
    case 'icon':
      opener = (
        <ButtonIcon
          background={header.icons?.background}
          hoverStroke={header.icons.hover}
          fill={'transparent'}
          stroke={header.icons.stroke}
          icon={Search}
          onClick={open}
          {...props}
        />
      );
      break;
    default:
      console.error(`Provided show component '${method}' is not supported. Use 'icon' or 'input'.`);
      opener = <div></div>;
  }
  return opener;
};

const HelpButton = ({
  helpUrl,
  ...props
}: any) => {
  const open = () => {
    const help = window.open(helpUrl, '_blank');
    help?.focus();
  };
  return (
    <ButtonIcon
      hoverStroke={header.icons.hover}
      stroke={header.icons.stroke}
      icon={HelpCircle}
      onClick={open}
      {...props}
    />
  );
};

const RssIcon = (iconBaseProps: any) => {
  if (config.features.rss && config.features.rss.enabled && config.features.rss.showIcon) {
    return (
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

const MobileNavigation = styled(({ show, ...props }) => (<div {...props} />))`
  display: ${(props) => (props.show ? 'flex' : 'none')} !important;
  flex-basis: 100%;
  flex-direction: column;
`;

const MobileMenuToggle = styled(({
  open,
  toggle,
  className,
  ...props
}: any) => {
  return (
    <div className={className} {...props}>
      <ButtonIcon
        title={'Open menu'}
        background={header.icons?.background}
        hoverStroke={header.icons.hover}
        fill={'transparent'}
        stroke={open === true ? header.icons.hover : header.icons.stroke}
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

export const Header = ({
  setShowSearch,
  location,
  show,
  toggleFullscreenMode
}: any) => {
  const headerTitleQuery = useStaticQuery(graphql`
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
  `);
  
  const {
    site: {
      siteMetadata: { headerTitle, helpUrl, logo, headerLinks },
    },
  } = headerTitleQuery;
  const logoLink = logo.link !== '' ? logo.link : '/';
  const logoImg = require('images/logo.svg');
  const darkMode = true;

  const open = () => {
    setShowSearch(true);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  
  const iconBaseProps = {
    background: header.icons?.background,
    hoverStroke: header.icons.hover,
    stroke: header.icons.stroke,
  };
  const DarkModeButton = config.features.darkMode.enabled ? (
    <DarkModeSwitch
      {...iconBaseProps}
      hoverFill={header.icons.hover}
      fill={header.icons.fill}
      isDarkThemeActive={darkMode}
      toggleActiveTheme={() => {}}
    />
  ) : (
    <Empty />
  );
  const toggleMenuOpen = () => setMenuOpen(!menuOpen);
  globalHistory.listen((location) => {
    setMenuOpen(false);
    setShowSearch(false);
  });
  return (
    <div>
      {config.features.fullScreenMode.enabled &&
      config.features.fullScreenMode.enabled === true ? (
        <FullScreenHeader show={!show} css={hiddenMobile}>
          <FullScreenClose toggle={toggleFullscreenMode} />
          {DarkModeButton}
        </FullScreenHeader>
      ) : (
        <Empty />
      )}
      
      <HeaderWrapper show={show}>
        <Logo link={logoLink} img={logoImg} title={headerTitle} />
        <TopNavigation css={hiddenMobile}>
          <Navigation links={headerLinks} />
        </TopNavigation>
        <ButtonsWrapper>
          {isSearchEnabled ? (
            <div>
              <SearchOpener open={open} forcedComponent={'icon'} css={visibleTablet} />
              <SearchOpener open={open} css={hiddenTablet} />
            </div>
          ) : <Empty />}
          {helpUrl && helpUrl.length > 0 ? (
            <HelpButton css={hiddenMobile} helpUrl={helpUrl} />
          ) : (
            <Empty />
          )}
          
          <SocialButtonsWrapper css={hiddenMobile}>
            {SocialButtons(iconBaseProps, config.social)}
          </SocialButtonsWrapper>
          <RssIcon {...iconBaseProps} />
          {config.features.fullScreenMode.enabled &&
          config.features.fullScreenMode.enabled === true ? (
            <FullScreenEnter toggle={toggleFullscreenMode} css={hiddenMobile} />
          ) : (
            <Empty />
          )}
          {DarkModeButton}
          <MobileMenuToggle toggle={toggleMenuOpen} open={menuOpen} />
        </ButtonsWrapper>
        {isMobile() ? (
          <MobileNavigation css={visibleMobile} show={menuOpen}>
            <Sidebar location={location} show={true} />
            <Navigation links={headerLinks} />
            <SocialButtonsWrapper css={visibleMobile}>
              {SocialButtons(iconBaseProps, config.social)}
            </SocialButtonsWrapper>
          </MobileNavigation>
        ) : (
          <Empty />
        )}
      </HeaderWrapper>
    </div>
  );
}
