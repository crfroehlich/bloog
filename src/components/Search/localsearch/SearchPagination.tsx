import React from 'react';
// @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'Pagination'.
import { Pagination } from '..';
export const SearchPagination = ({
  currentPage,
  ...rest
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Pagination currentPage={currentPage} {...rest} />
);
