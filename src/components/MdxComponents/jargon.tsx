import React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const JargonWrapper = styled.em`
  display: inline-block;
  .jargon-term {
    text-decoration: underline dotted ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.primary};
    &::after {
      content: '?';
      font-weight: bold;
      display: inline-block;
      transform: translate(0, -0.5em);
      font-size: 75%;
      color: ${(props) => props.theme.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.primary};
      margin-left: 3px;
    }
    &:hover {
      position: relative;
      text-decoration: none;
      cursor: help;

      .jargon-info {
        color: ${(props) => props.theme.        
// @ts-expect-error ts-migrate(2339) FIXME: Property 'jargon' does not exist on type 'Theme'.
jargon.font};
        display: block;
        position: absolute;
        top: 1.5em;
        left: 0;
        background: ${(props) => props.theme.        
// @ts-expect-error ts-migrate(2339) FIXME: Property 'jargon' does not exist on type 'Theme'.
jargon.background};
        border: 1px solid ${(props) => props.theme.        
// @ts-expect-error ts-migrate(2339) FIXME: Property 'jargon' does not exist on type 'Theme'.
jargon.border};
        border-left: 4px solid ${(props) => props.theme.        
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.primary};
        padding: 1rem;
        border-radius: 4px;
        font-size: 90%;
        min-width: 300px;
        max-width: 400px;
        z-index: 1;
        box-shadow: 0 0 4px 2px ${(props) => props.theme.        
// @ts-expect-error ts-migrate(2339) FIXME: Property 'jargon' does not exist on type 'Theme'.
jargon.shadow};
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
            border-top: 1px solid ${(props) => props.theme.            
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.primary};
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

const Jargon = ({
  children,
  ...props
}: any) => {
  const theme = useTheme();
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <JargonWrapper theme={theme} {...props}>
      {children}
    </JargonWrapper>
  );
};

export default Jargon;
