import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Card } from './card';
import { onMobile } from '../../styles/responsive';

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

export const ImageCard = ({
  children,
  width,
  height,
  src
}: any) => {
  const theme = useTheme();
  const imgWidth = width ? width : '50%';
  const imgHeight = width ? width : '50%';
  return (
      <ImageCardWrapper width={imgWidth} height={imgHeight}>
        <Image src={src} />
        <Text>{children}</Text>
      </ImageCardWrapper>
  );
};
