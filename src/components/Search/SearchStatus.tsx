import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './styles' was resolved to '/home/fro/code/... Remove this comment to see the full error message
import { marginLeftRight } from './styles';
// @ts-expect-error ts-migrate(2305) FIXME: Module '"../Loader"' has no exported member 'Loadi... Remove this comment to see the full error message
import { Loading } from '../Loader';

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

export const SearchStatus = ({
  searching,
  noHits,
  query
}: any) => {
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
    ''
  );
};
