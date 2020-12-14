import * as React from 'react';

export const LoadingProvider = ({
  isLoading,
  ...props
}: any) => {
  if (isLoading) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <div>Loading...</div>;
  }
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <div {...props}></div>;
};
