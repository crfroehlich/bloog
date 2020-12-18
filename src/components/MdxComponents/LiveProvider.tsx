import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

export const ReactLiveProvider = ({ code }: any) => {
  return (
    <LiveProvider code={code}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};
