import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './styles' was resolved to '/mnt/k/code/scr... Remove this comment to see the full error message
import { marginLeftRight } from './styles';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Loader' was resolved to '/mnt/k/code/sc... Remove this comment to see the full error message
import Loading from '../Loader';

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

const SearchStatus = ({
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div css={marginLeftRight}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StatusWrapper>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <span>{text}</span>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {noHits ? <span css={queryToken}>{query}</span> : ''}
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {searching ? <Loading css={{ margin: '20px auto' }} /> : ''}
      </StatusWrapper>
    </div>
  ) : (
    ''
  );
};

export default SearchStatus;
