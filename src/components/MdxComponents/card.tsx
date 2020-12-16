import React from 'react';
import styled from '@emotion/styled';
import { shadowAround } from '../../styles/styles';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: ${(props) => props.theme.transitions.hover};
`;

export const Card = ({ ...props }) => {
  return <CardWrapper css={shadowAround} {...props} />;
};
