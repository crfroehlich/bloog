import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { dark } from '../../theme/ThemeBuilder';

export const ThemeProvider = (props) => {
  const { children } = props;
  return (
    <div>
      <EmotionThemeProvider theme={dark}>{children}</EmotionThemeProvider>
    </div>
  );
}
