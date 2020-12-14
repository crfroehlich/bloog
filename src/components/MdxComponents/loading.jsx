import * as React from 'react';

export const LoadingProvider = ({ isLoading, ...props }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div {...props}></div>;
};
