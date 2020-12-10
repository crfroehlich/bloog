import React from 'react';
import { SidebarSearchInput } from '..';
export default (({
  refine,
  ...rest
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <SidebarSearchInput search={(value: any) => refine(value)} {...rest} showClean={true} />
));
