import * as React from 'react';

const LoadingProvider = ({
  isLoading,
  ...props
}: any) => {
  if (isLoading) {
    
    return <div>Loading...</div>;
  }
  
  return <div {...props}></div>;
};

export default LoadingProvider;
