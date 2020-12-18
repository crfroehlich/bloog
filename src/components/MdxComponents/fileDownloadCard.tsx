import styled from '@emotion/styled';
import React from 'react';
import { Download } from 'react-feather';
import { getTheme } from '../../theme';
import { decreaseIntensivity } from '../../utils/colors';
import { emojiTools as emoji } from '../../utils/emoji';
import { Card } from './card';

const { colors } = getTheme();

const DownloadCard = styled(Card)`
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  &:hover {
    border: 1px solid ${colors.primary};
  }
`;

const DownloadPath = styled.div`
  color: ${() => decreaseIntensivity(colors.fontLight, 0.25)};
  font-size: 9pt;
  padding-left: 16px;
  text-align: right;
`;

const Title = styled.div`
  padding: 0 14px;
  color: ${() => colors.primary};
  font-size: 12pt;
  font-weight: 500;
  flex: 1;
`;

export const FileDownloadCard = ({ title, url }: any) => {
  const splitted = url.split('/');
  const filename = splitted[splitted.length - 1];
  return (
    <a href={url} download>
      <DownloadCard title={`Download file ${filename}`}>
        <Download color={colors.primary} size={23} />
        <Title>{emoji.emojify(title)}</Title>
        <DownloadPath>{filename}</DownloadPath>
      </DownloadCard>
    </a>
  );
};
