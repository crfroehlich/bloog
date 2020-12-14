import React from 'react';
import styled from '@emotion/styled';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import { config } from 'config';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ContentTree' was resolved to '/home/fro/... Remove this comment to see the full error message
import { ContentTree } from './ContentTree';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './links' or its corresponding ... Remove this comment to see the full error message
import { Links } from './links';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './poweredBy' or its correspond... Remove this comment to see the full error message
import { PoweredBy } from './poweredBy';
// @ts-expect-error ts-migrate(2305) FIXME: Module '"../Navigation"' has no exported member 'g... Remove this comment to see the full error message
import { getNavigationData } from '../Navigation';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../styles/styles' was resolved to '/hom... Remove this comment to see the full error message
import { scrollbar } from '../../styles/styles';
import { onMobile } from '../../styles/responsive';

const Sidebar = styled.div`
  margin-left: ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'layout' does not exist on type 'Theme'.
layout.leftMargin};
  height: 100%;
  display: flex;
  overflow-y: hidden;
  align-items: stretch;
  flex-direction: column;
  ${onMobile} {
    margin-left: 10px;
  }
`;

const SidebarMain = styled.div`
  overflow-y: auto;
  width: 100%;
  margin: 0;
  display: block;
  padding: 0;
  padding-top: 32px;
  overflow: hidden;
  -webkit-overflow-scrolling: hidden;
  &:hover,
  &:focus {
    overflow-y: overlay;
    -webkit-overflow-scrolling: touch;
  }
`;

const PoweredByWrapper = styled.div`
  display: block;
  padding: 0;
  position: relative;
  box-shadow: 0 -7px 10px -5px ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'navigationSidebar' does not exist on typ... Remove this comment to see the full error message
navigationSidebar.backgroundPrimary};
`;

const NavigationWrapper = styled(({
  className,
  children
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <aside className={className}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Sidebar>{children}</Sidebar>
    </aside>
  );
})`
  display: ${(props) => props.show ? 'block' : 'none'};
  height: 100vh;
  top: 0;
  flex: 0 0 ${(props) => props.theme.layout.leftWidth};
  background: ${(props) => props.theme.navigationSidebar.backgroundPrimary};
  background: linear-gradient(
    ${(props) => props.theme.navigationSidebar.backgroundPrimary},
    ${(props) => props.theme.navigationSidebar.backgroundSecondary}
  );
  /* Safari 4-5, Chrome 1-9 */
  background: linear-gradient(
    ${(props) => props.theme.navigationSidebar.backgroundPrimary},
    ${(props) => props.theme.navigationSidebar.backgroundSecondary}
  );
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(${(props) => props.theme.navigationSidebar.backgroundPrimary}),
    to(${(props) => props.theme.navigationSidebar.backgroundSecondary})
  );
  /* Safari 5.1, Chrome 10+ */
  background: -webkit-linear-gradient(
    top,
    ${(props) => props.theme.navigationSidebar.backgroundPrimary},
    ${(props) => props.theme.navigationSidebar.backgroundSecondary}
  );
  /* Firefox 3.6+ */
  background: -moz-linear-gradient(
    top,
    ${(props) => props.theme.navigationSidebar.backgroundPrimary},
    ${(props) => props.theme.navigationSidebar.backgroundSecondary}
  );
  /* IE 10 */
  background: -ms-linear-gradient(
    top,
    ${(props) => props.theme.navigationSidebar.backgroundPrimary},
    ${(props) => props.theme.navigationSidebar.backgroundSecondary}
  );
  /* Opera 11.10+ */
  background: -o-linear-gradient(
    top,
    ${(props) => props.theme.navigationSidebar.backgroundPrimary},
    ${(props) => props.theme.navigationSidebar.backgroundSecondary}
  );
  border-right: 1px solid ${(props) => props.theme.navigationSidebar.border};
  position: sticky;
  ${onMobile} {
    width: 100%;
    height: auto;
    border-right: none;
    position: relative;
    background: ${(props) => props.theme.navigationSidebar.backgroundPrimary};
  }
`;

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const Divider = styled((props: any) => <div {...props}>
  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
  <hr />
</div>)`
  padding: 0.5rem 0;
  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.navigationSidebar.border};
  }
`;

export const ContentNavigation = ({
  show,
  className,
  location
}: any) => {
  const edges = getNavigationData();
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <NavigationWrapper className={className} show={show}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <SidebarMain css={scrollbar}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ContentTree edges={edges} location={location} />
        {config.sidebar.links && config.sidebar.links.length > 0 ? (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Divider />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Links links={config.sidebar.links} />
          </>
        ) : null}
      </SidebarMain>
      {config.sidebar.poweredBy && config.sidebar.poweredBy.name ? (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <PoweredByWrapper>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <PoweredBy
              trademark={config.sidebar.poweredBy.trademark}
              name={config.sidebar.poweredBy.name}
              link={config.sidebar.poweredBy.link}
            />
          </PoweredByWrapper>
        </>
      ) : null}
    </NavigationWrapper>
  );
};
