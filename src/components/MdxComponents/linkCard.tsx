import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { ArrowRight } from 'react-feather';
import { emojiTools as emoji } from '../../utils/emoji';
// @ts-expect-error ts-migrate(2305) FIXME: Module '"../Link"' has no exported member 'Link'.
import { Link } from '../Link';
import { decreaseIntensivity } from '../../utils/colors';
// @ts-expect-error ts-migrate(6142) FIXME: Module './card' was resolved to '/home/fro/code/te... Remove this comment to see the full error message
import { Card } from './card';

const LinkCardWrapper = styled(Card)`
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
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

export default ({
  title,
  url
}: any) => {
  const theme = useTheme();
  const path = url.replace(/(https:\/\/)|(http:\/\/)/, '');
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Link to={url}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <LinkCardWrapper>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ArrowRight color={theme.colors.primary} size={23} />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Title>{emoji.emojify(title)}</Title>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <LinkPath>{path}</LinkPath>
      </LinkCardWrapper>
    </Link>
  );
};
