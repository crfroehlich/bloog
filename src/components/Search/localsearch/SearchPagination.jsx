import React from 'react';
import { Pagination } from '..';
export const SearchPagination = ({ currentPage, ...rest }) => (
  <Pagination currentPage={currentPage} {...rest} />
);
