import React from 'react';
import styled from '@emotion/styled';
import { onMobile } from '../../styles/responsive';

const Trademark = styled(({
  className,
  trademark
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={className}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <img src={trademark} alt="powered by logo" loading={'lazy'} />
    </div>
  );
})`
  display: flex;
  img {
    svg * {
      color: ${(props) => props.theme.navigationSidebar.poweredBy.hover};
    }
    width: 25px;
  }
`;
const PoweredText = styled(({
  className,
  text
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={className}>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <span>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div css={{ margin: '0 auto', width: 'fit-content' }}>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <a className={className} href={link} target="_blank" rel="noreferrer">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Trademark trademark={trademark} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <PoweredText text={name} />
    </a>
  </div>
))`
  color: ${(props) => props.theme.navigationSidebar.poweredBy.font};
  margin: 12px;
  display: flex;
  align-items: center;
  margin-left: 0px;
  padding: 12px 18px;
  border-radius: 4px;
  text-decoration: none;
  background-color: ${(props) => props.theme.navigationSidebar.poweredBy.background};
  transition: ${(props) => props.theme.transitions.hoverColor};
  &:hover {
    border: 1px solid ${(props) => props.theme.navigationSidebar.poweredBy.hover};
    margin-top: 11px;
    color: ${(props) => props.theme.navigationSidebar.poweredBy.hover};
  }
  ${onMobile} {
    display: none;
  }
`;
