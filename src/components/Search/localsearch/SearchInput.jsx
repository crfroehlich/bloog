import React from 'react';
import { SidebarSearchInput } from '..';
export const SearchInput = (({ refine, ...rest }) => (
  <SidebarSearchInput search={(value) => refine(value)} {...rest} showClean={true} />
));
