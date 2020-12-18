import React from 'react';
import { Pagination } from '.';

export const SearchPagination = ({ currentPage, ...rest }: any) => (
  <Pagination currentPage={currentPage} {...rest} />
);
