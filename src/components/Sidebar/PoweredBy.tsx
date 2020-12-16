import React from 'react';
import styled from '@emotion/styled';
import { onMobile } from '../../styles/responsive';
import { getTheme } from '../../theme';

const { navigationSidebar, transitions } = getTheme();

const Trademark = styled(({
  className,
  trademark
}: any) => {
  return (
    <div className={className}>
      <img src={trademark} alt="powered by logo" loading={'lazy'} />
    </div>
  );
})`
  display: flex;
  img {
    svg * {
      color: ${navigationSidebar.poweredBy.hover};
    }
    width: 25px;
  }
`;
const PoweredText = styled(({
  className,
  text
}: any) => (
  <div className={className}>
    <span>
      Powered By <b>{text}</b>
    </span>
  </div>
))`
  padding-left: 20px;
  span {
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.625;
  }
`;

export const PoweredBy = styled(({
  className,
  trademark,
  name,
  link
}: any) => (
  <div css={{ margin: '0 auto', width: 'fit-content' }}>
    <a className={className} href={link} target="_blank" rel="noreferrer">
      <Trademark trademark={trademark} />
      <PoweredText text={name} />
    </a>
  </div>
))`
  color: ${navigationSidebar.poweredBy.font};
  margin: 12px;
  display: flex;
  align-items: center;
  margin-left: 0px;
  padding: 12px 18px;
  border-radius: 4px;
  text-decoration: none;
  background-color: ${navigationSidebar.poweredBy?.background};
  transition: ${transitions.hoverColor};
  &:hover {
    border: 1px solid ${navigationSidebar.poweredBy.hover};
    margin-top: 11px;
    color: ${navigationSidebar.poweredBy.hover};
  }
  ${onMobile} {
    display: none;
  }
`;
