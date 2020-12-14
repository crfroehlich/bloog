import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './card' was resolved to '/home/fro/code/te... Remove this comment to see the full error message
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
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ImageCardWrapper width={imgWidth} height={imgHeight}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Image src={src} />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Text>{children}</Text>
      </ImageCardWrapper>
  );
};
