import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { getTheme } from '../../theme';
import { paddingLeftRight } from './styles';

const { search } = getTheme();

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
    border-top: 2px solid ${search.border};
  }
  li {
    ${topBottomPadding};
    ${paddingLeftRight};
    &:hover {
      background-color: ${search.hover};
      color: ${search.fond?.hover};
    }
  }
  li + li {
    border-top: 1px solid ${search.border};
  }
  * {
    margin-top: 0;
    color: ${search.fond?.base};
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${search.mark.font};
    background: ${search.mark?.background};
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

export const Hit = ({ slug, title, details }: any) => (
  <Link to={slug}>
    <HitTitle>{title}</HitTitle>
    <HitDetails>{details}</HitDetails>
  </Link>
);
