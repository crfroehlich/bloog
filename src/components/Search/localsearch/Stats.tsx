import React from 'react';
// @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'SearchStats'... Remove this comment to see the full error message
import { SearchStats } from '..';
export const Stats = ({
  nbHits,
  ...rest

}: any) => <SearchStats hits={nbHits} {...rest} />;
