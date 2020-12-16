export const LoadingProvider = ({
  isLoading,
  ...props
}: any) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div {...props}></div>;
};
