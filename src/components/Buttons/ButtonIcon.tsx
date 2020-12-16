
import React from 'react';
import styled from '@emotion/styled';
import { getTheme } from '../../theme';

const transitions = getTheme().transitions;

const ButtonIconWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: 4px;
  outline: none;

  background-color: ${(props: any) => props?.background};
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    svg {
      fill: ${(props: any) => props.hoverFill};
      stroke: ${(props: any) => props.hoverStroke};
    }
  }
  svg {
    transition: ${() => transitions.hover};
    fill: ${(props: any) => props.fill};
    stroke: ${(props: any) => props.stroke};
  }
`;

export const ButtonIcon = (props) => {
  const { icon } = props;
  return (
    
    <ButtonIconWrapper {...props} role={'button'} tabIndex={0}>
      {/* not defining color as a workaround to use css styling instead */}
      {icon.render({ color: '' })}
    </ButtonIconWrapper>
  );
};
