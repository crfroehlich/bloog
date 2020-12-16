import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { ArrowRight } from 'react-feather';
import { emojiTools as emoji } from '../../utils/emoji';
import { Link } from '../Link';
import { decreaseIntensivity } from '../../utils/colors';
import { Card } from './card';

const LinkCardWrapper = styled(Card)`
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  &:hover {
    border: 1px solid ${(props: any) => props.theme.colors.primary};
  }
`;

const LinkPath = styled.div`
  color: ${(props) => decreaseIntensivity(props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.fontLight, 0.25)};
  font-size: 9pt;
  padding-left: 16px;
  text-align: right;
`;

const Title = styled.div`
  padding: 0 14px;
  color: ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.primary};
  font-size: 12pt;
  font-weight: 500;
  flex: 1;
`;

export const LinkCard = ({
  title,
  url
}: any) => {
  const theme: any = useTheme();
  const path = url.replace(/(https:\/\/)|(http:\/\/)/, '');
  return (
    <Link to={url}>
      <LinkCardWrapper>
        <ArrowRight color={theme.colors.primary} size={23} />
        <Title>{emoji.emojify(title)}</Title>
        <LinkPath>{path}</LinkPath>
      </LinkCardWrapper>
    </Link>
  );
};
