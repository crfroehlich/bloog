import styled from '@emotion/styled';
import React from 'react';
import { onMobile } from '../../styles/responsive';
import { Card } from './card';

const ImageCardWrapper = styled(Card)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${onMobile} {
    width: 100%;
    height: 100%;
  }
`;

const Image = styled.img`
  align-self: center;
  border-radius: 4px;
`;

const Text = styled.p`
  margin-top: 15px;
  & > p:first-of-type {
    margin-top: 0;
  }
  & > p:last-child {
    margin-bottom: 0;
  }
`;

export const ImageCard = ({ children, width, height, src }: any) => {
  const imgWidth = width || '50%';
  const imgHeight = height || '50%';
  return (
    <ImageCardWrapper width={imgWidth} height={imgHeight}>
      <Image src={src} />
      <Text>{children}</Text>
    </ImageCardWrapper>
  );
};
