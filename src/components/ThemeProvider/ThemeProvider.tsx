import React, { useState, useEffect } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { light, dark } from '../../theme/ThemeBuilder';

export const ThemeProvider = ({darkModeConfig, ...props}) => {
  const [state, setState] = useState(darkModeConfig);

  useEffect(() => {
    retrieveActiveTheme();
  });

  const retrieveActiveTheme = () => {
    if (!darkModeConfig.enabled) {
      return false;
    }
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'string | null' is not assignable... Remove this comment to see the full error message
    let isDarkThemeActive = JSON.parse(window.localStorage.getItem('isDarkThemeActive'));
    if (isDarkThemeActive == null) {
      isDarkThemeActive =
        window.matchMedia('(prefers-color-scheme: dark)').matches || darkModeConfig.default;
    }
    setState({ isDarkThemeActive });
    return isDarkThemeActive;
  };

  const toggleActiveTheme = () => {
    if (!darkModeConfig.enabled) {
      console.warn('Dark mode is disabled, but trying to activate it.');
      return false;
    }
    setState((prevState: any) => ({
      isDarkThemeActive: !prevState.isDarkThemeActive
    }));

    window.localStorage.setItem('isDarkThemeActive', JSON.stringify(!state.isDarkThemeActive));
    return !state.isDarkThemeActive;
  };

  const { children } = props;
  const { isDarkThemeActive } = state;
  const currentActiveTheme = isDarkThemeActive ? dark : light;
  return (
    <div>
      <EmotionThemeProvider theme={currentActiveTheme}>{children}</EmotionThemeProvider>
    </div>
  );
}
