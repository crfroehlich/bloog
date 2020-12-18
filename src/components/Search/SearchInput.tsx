import React from 'react';
import { SidebarSearchInput } from '.';

export const SearchInput = ({ refine, ...rest }: any) => (
  <SidebarSearchInput search={(value: any) => refine(value)} {...rest} showClean={true} />
);
