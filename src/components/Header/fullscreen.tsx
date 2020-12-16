import React from 'react';
import styled from '@emotion/styled';
import { Maximize, Minimize } from 'react-feather';
import { ButtonIcon } from '..';
import { getTheme } from '../../theme';

const { header, colors, transitions } = getTheme();

export const FullScreenEnter = styled(({
  toggle,
  ...props
}: any) => {
    return (
      <ButtonIcon
        title={'Enter fullscreen mode'}
        background={header.icons.background}
        hoverStroke={header.icons.hover}
        fill={'transparent'}
        stroke={header.icons.stroke}
        icon={Maximize}
        onClick={toggle}
        {...props}
      />
    );
  })``;
  
export const FullScreenHeader = styled(({ show, ...props }) => (<div {...props} />))`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: fixed;
  justify-content: flex-end;
  align-items: center;
  height: 32px;
  padding: 6px;
  width: 100%;
  z-index: 10;
  top: 0;
  background-color: ${() => header.background};
  `;
  
export const FullScreenClose = styled(({
    className,
    toggle
  }: any) => {
    return (
      <div className={className} onClick={toggle}>
        <span style={{marginRight: '6px'}}>Close full mode</span>
        <ButtonIcon
          title={'Close fullscreen mode'}
          
          background={header.icons?.background}
          
          hoverStroke={header.icons.hover}
          fill={'transparent'}
          
          stroke={header.icons.stroke}
          icon={Minimize}
        />
      </div>
    );
  })`
  display: flex;
  transition: ${() => transitions.hover};
  cursor: pointer;
  align-items: center;
  font-size: 10pt;
  margin-right: 10px;
  &:hover{
    color: ${() => colors.hover};
  }
  `;
  