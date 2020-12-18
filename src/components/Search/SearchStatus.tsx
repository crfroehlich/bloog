import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Empty } from '../Empty';
import { Loader as Loading } from '../Loader';
import { marginLeftRight } from './styles';

const queryToken = css`
  font-weight: bold;
  font-style: italic;
  display: block;
`;

const StatusWrapper = styled.div`
  margin: 30px auto;
  text-align: center;
  line-height: 30px;
  span {
    font-size: 1.2em;
  }
`;

export const SearchStatus = ({ searching, noHits, query }: any) => {
  let text = '';
  if (searching) {
    text = 'Searching...';
  } else if (noHits) {
    text = `No results found for `;
  }
  return text !== '' ? (
    <div css={marginLeftRight}>
      <StatusWrapper>
        <span>{text}</span>
        {noHits ? <span css={queryToken}>{query}</span> : ''}
        {searching ? <Loading css={{ margin: '20px auto' }} /> : ''}
      </StatusWrapper>
    </div>
  ) : (
    <Empty />
  );
};
