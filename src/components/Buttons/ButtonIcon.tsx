
import React from 'react';
import styled from '@emotion/styled';

const ButtonIconWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: 4px;
  outline: none;

  background-color: ${(props) => props.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'background' does not exist on type '{ th... Remove this comment to see the full error message
background};
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    svg {
      fill: ${(props) => props.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'hoverFill' does not exist on type '{ the... Remove this comment to see the full error message
hoverFill};
      stroke: ${(props) => props.      
// @ts-expect-error ts-migrate(2339) FIXME: Property 'hoverStroke' does not exist on type '{ t... Remove this comment to see the full error message
hoverStroke};
    }
  }
  svg {
    transition: ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'transitions' does not exist on type 'The... Remove this comment to see the full error message
transitions.hover};
    fill: ${(props) => props.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'fill' does not exist on type '{ theme?: ... Remove this comment to see the full error message
fill};
    stroke: ${(props) => props.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'stroke' does not exist on type '{ theme?... Remove this comment to see the full error message
stroke};
  }
`;

type Props = {
    background?: string;
    hoverFill?: string;
    hoverStroke?: string;
    fill?: string;
    stroke?: string;
    icon: any;
};

export const ButtonIcon = ({ icon, ...props }: Props) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ButtonIconWrapper {...props} role={'button'} tabIndex={0}>
      {/* not defining color as a workaround to use css styling instead */}
      {icon.render({ color: '' })}
    </ButtonIconWrapper>
  );
};
