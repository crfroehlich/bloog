import styled from '@emotion/styled';
import React from 'react';
import { getTheme } from '../../theme';

const { colors, jargon } = getTheme();

const JargonWrapper = styled.em`
  display: inline-block;
  .jargon-term {
    text-decoration: underline dotted ${colors.primary};
    &::after {
      content: '?';
      font-weight: bold;
      display: inline-block;
      transform: translate(0, -0.5em);
      font-size: 75%;
      color: ${colors.primary};
      margin-left: 3px;
    }
    &:hover {
      position: relative;
      text-decoration: none;
      cursor: help;

      .jargon-info {
        color: ${jargon.font};
        display: block;
        position: absolute;
        top: 1.5em;
        left: 0;
        background: ${jargon?.background};
        border: 1px solid ${jargon.border};
        border-left: 4px solid ${colors.primary};
        padding: 1rem;
        border-radius: 4px;
        font-size: 90%;
        min-width: 300px;
        max-width: 400px;
        z-index: 1;
        box-shadow: 0 0 4px 2px ${jargon.shadow};
        span:first-of-type {
          width: 100%;
          padding-bottom: 10px;
          display: inline-block;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 0.5em;
            border-top: 1px solid ${colors.primary};
            z-index: -1;
          }
        }
      }
    }

    .jargon-info {
      display: none;
    }
  }
`;

export const Jargon = ({ children, ...props }: any) => {
  return <JargonWrapper {...props}>{children}</JargonWrapper>;
};
