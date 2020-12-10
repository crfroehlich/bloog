import React from 'react';
import { SearchStats } from '..';
export default ({
  nbHits,
  ...rest
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
}: any) => <SearchStats hits={nbHits} {...rest} />;
