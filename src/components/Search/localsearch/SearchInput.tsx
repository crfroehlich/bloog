import React from 'react';
// @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'SidebarSearc... Remove this comment to see the full error message
import { SidebarSearchInput } from '..';
export const SearchInput = (({
  refine,
  ...rest
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <SidebarSearchInput search={(value: any) => refine(value)} {...rest} showClean={true} />
));
