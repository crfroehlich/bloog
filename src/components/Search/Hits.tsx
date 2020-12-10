import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './styles' was resolved to '/mnt/k/code/scr... Remove this comment to see the full error message
import { paddingLeftRight } from './styles';

const topBottomPadding = css`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const HitsWrapper = styled.div`
  left: 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  margin-top: 10px;
  // @media only screen and (max-width: 991px) {
  //   width: 400px;
  //   max-width: 400px;
  // }
  // @media only screen and (max-width: 767px) {
  //   width: 100%;
  //   max-width: 500px;
  // }
  > * + * {
    border-top: 2px solid ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'search' does not exist on type 'Theme'.
search.border};
  }
  li {
    ${topBottomPadding};
    ${paddingLeftRight};
    &:hover {
      background-color: ${(props) => props.theme.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'search' does not exist on type 'Theme'.
search.hover};
      color: ${(props) => props.theme.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'search' does not exist on type 'Theme'.
search.font.hover};
    }
  }
  li + li {
    border-top: 1px solid ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'search' does not exist on type 'Theme'.
search.border};
  }
  * {
    margin-top: 0;
    color: ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'search' does not exist on type 'Theme'.
search.font.base};
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'search' does not exist on type 'Theme'.
search.mark.font};
    background: ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'search' does not exist on type 'Theme'.
search.mark.background};
  }
`;

const HitTitle = styled.div`
  font-weight: bold;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 15px;
`;

const HitDetails = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 14px;
`;

export const Hit = ({
  slug,
  title,
  details
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Link to={slug}>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <HitTitle>{title}</HitTitle>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <HitDetails>{details}</HitDetails>
  </Link>
);
