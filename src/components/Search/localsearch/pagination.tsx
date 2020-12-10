import React from 'react';
import { Pagination } from '..';
export default ({
  currentPage,
  ...rest
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Pagination currentPage={currentPage} {...rest} />
);
