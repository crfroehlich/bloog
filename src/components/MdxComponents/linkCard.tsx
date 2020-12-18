import styled from '@emotion/styled';
import React from 'react';
import { ArrowRight } from 'react-feather';
import { getTheme } from '../../theme';
import { decreaseIntensivity } from '../../utils/colors';
import { emojiTools as emoji } from '../../utils/emoji';
import { Link } from '../Link';
import { Card } from './card';

const { colors } = getTheme();

const LinkCardWrapper = styled(Card)`
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  &:hover {
    border: 1px solid ${colors.primary};
  }
`;

const LinkPath = styled.div`
  color: ${(props) => decreaseIntensivity(props.theme.colors.fontLight, 0.25)};
  font-size: 9pt;
  padding-left: 16px;
  text-align: right;
`;

const Title = styled.div`
  padding: 0 14px;
  color: ${colors.primary};
  font-size: 12pt;
  font-weight: 500;
  flex: 1;
`;

export const LinkCard = ({ title, url }: any) => {
  const path = url.replace(/(https:\/\/)|(http:\/\/)/, '');
  return (
    <Link to={url}>
      <LinkCardWrapper>
        <ArrowRight color={colors.primary} size={23} />
        <Title>{emoji.emojify(title)}</Title>
        <LinkPath>{path}</LinkPath>
      </LinkCardWrapper>
    </Link>
  );
};
