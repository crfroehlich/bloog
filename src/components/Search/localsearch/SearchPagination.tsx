import React from 'react';
// @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'Pagination'.
import { Pagination } from '..';
export const SearchPagination = ({
  currentPage,
  ...rest
}: any) => (
  
  <Pagination currentPage={currentPage} {...rest} />
);
