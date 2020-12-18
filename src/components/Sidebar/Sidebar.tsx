import styled from '@emotion/styled';
import React from 'react';
import config from '../../../.config';
import { onMobile } from '../../styles/responsive';
import { scrollbar } from '../../styles/styles';
import { getTheme } from '../../theme';
import { Empty } from '../Empty';
import { getNavigationData } from '../Navigation';
import { ContentTree } from './ContentTree';
import { Links } from './Links';
import { PoweredBy } from './PoweredBy';

const { layout, navigationSidebar } = getTheme();

const SidebarWrapper = styled.div`
  margin-left: ${layout.leftMargin};
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
  box-shadow: 0 -7px 10px -5px ${navigationSidebar?.backgroundPrimary};
`;

const NavigationWrapper = styled(({ className, children }: any) => {
  return (
    <aside className={className}>
      <SidebarWrapper>{children}</SidebarWrapper>
    </aside>
  );
})`
  display: ${(props) => (props.show ? 'block' : 'none')};
  height: 100vh;
  top: 0;
  flex: 0 0 ${layout.leftWidth};
  background: ${navigationSidebar?.backgroundPrimary};
  background: linear-gradient(
    ${navigationSidebar?.backgroundPrimary},
    ${navigationSidebar?.backgroundSecondary}
  );
  /* Safari 4-5, Chrome 1-9 */
  background: linear-gradient(
    ${navigationSidebar?.backgroundPrimary},
    ${navigationSidebar?.backgroundSecondary}
  );
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(${navigationSidebar?.backgroundPrimary}),
    to(${navigationSidebar?.backgroundSecondary})
  );
  /* Safari 5.1, Chrome 10+ */
  background: -webkit-linear-gradient(
    top,
    ${navigationSidebar?.backgroundPrimary},
    ${navigationSidebar?.backgroundSecondary}
  );
  /* Firefox 3.6+ */
  background: -moz-linear-gradient(
    top,
    ${navigationSidebar?.backgroundPrimary},
    ${navigationSidebar?.backgroundSecondary}
  );
  /* IE 10 */
  background: -ms-linear-gradient(
    top,
    ${navigationSidebar?.backgroundPrimary},
    ${navigationSidebar?.backgroundSecondary}
  );
  /* Opera 11.10+ */
  background: -o-linear-gradient(
    top,
    ${navigationSidebar?.backgroundPrimary},
    ${navigationSidebar?.backgroundSecondary}
  );
  border-right: 1px solid ${navigationSidebar.border};
  position: sticky;
  ${onMobile} {
    width: 100%;
    height: auto;
    border-right: none;
    position: relative;
    background: ${navigationSidebar?.backgroundPrimary};
  }
`;

const Divider = styled((props: any) => (
  <div {...props}>
    <hr />
  </div>
))`
  padding: 0.5rem 0;
  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid ${navigationSidebar.border};
  }
`;

export const Sidebar = ({ show, className, location }: any) => {
  const edges = getNavigationData();
  return (
    <NavigationWrapper className={className} show={show}>
      <SidebarMain css={{ ...scrollbar }}>
        <ContentTree edges={edges} location={location} />
        {config.sidebar.links?.length > 0 ? (
          <div>
            <Divider />
            <Links links={config.sidebar.links} />
          </div>
        ) : (
          <Empty />
        )}
      </SidebarMain>
      {config.sidebar.poweredBy && config.sidebar.poweredBy.name ? (
        <PoweredByWrapper>
          <PoweredBy
            trademark={config.sidebar.poweredBy.trademark}
            name={config.sidebar.poweredBy.name}
            link={config.sidebar.poweredBy.link}
          />
        </PoweredByWrapper>
      ) : (
        <Empty />
      )}
    </NavigationWrapper>
  );
};
