import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Download } from 'react-feather';
// @ts-expect-error ts-migrate(2306) FIXME: File '/mnt/k/code/scratchpads/BooGi/src/utils/emoj... Remove this comment to see the full error message
import emoji from '../../utils/emoji';
import { decreaseIntensivity } from '../../utils/colors';
// @ts-expect-error ts-migrate(6142) FIXME: Module './card' was resolved to '/mnt/k/code/scrat... Remove this comment to see the full error message
import Card from './card';

const DownloadCard = styled(Card)`
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

const DownloadPath = styled.div`
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
  const splitted = url.split('/')
  const filename = splitted[splitted.length - 1]
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <a href={url} download>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DownloadCard title={`Download file ${filename}`}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Download color={theme.colors.primary} size={23} />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Title>{emoji.emojify(title)}</Title>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DownloadPath>{filename}</DownloadPath>
      </DownloadCard>
    </a>
  );
};
