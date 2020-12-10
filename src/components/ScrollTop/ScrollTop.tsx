import React from 'react';
import styled from '@emotion/styled';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'images/up-arrow.inline.svg' or... Remove this comment to see the full error message
import Arrow from 'images/up-arrow.inline.svg';
import { onMobile, onTablet } from '../../styles/responsive';

const scrollToTop = () => window.scrollTo(0, 0);

const ScrollTop = styled(({
  className
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={className} onClick={scrollToTop} role={'button'} tabIndex={0}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Arrow />
    </div>
  );
})`
  background-color: ${(props) => props.theme.scrollTop.background};
  width: 35px;
  height: 35px;
  position: fixed;
  border-radius: 50px;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  z-index: 10;
  transition: ${(props) => props.theme.transitions.hover};
  ${onTablet} {
    background-color: ${(props) => props.theme.scrollTop.background + 'bc'};
  }
  ${onMobile} {
    bottom: 25px;
    right: 25px;
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.theme.scrollTop.background + '9b'};
  }
  svg {
    width: 50%;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    path {
      fill: ${(props) => props.theme.scrollTop.arrow};
    }
  }
  &:hover {
    background: ${(props) => props.theme.scrollTop.hover};
  }
`;

export default ScrollTop;
