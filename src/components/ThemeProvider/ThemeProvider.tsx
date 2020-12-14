import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { light, dark } from '../../theme/ThemeBuilder';

type State = any;

export class ThemeProvider extends React.Component<{}, State> {
  darkModeConfig: any;

  state = {
    isDarkThemeActive: false,
  };

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'darkModeConfig' does not exist on type '... Remove this comment to see the full error message
  constructor({ darkModeConfig }: {}) {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 1-2 arguments, but got 0.
    super();
    this.darkModeConfig = darkModeConfig;
  }

  componentDidMount() {
    this.retrieveActiveTheme();
  }

  retrieveActiveTheme = () => {
    if (!this.darkModeConfig.enabled) {
      return false;
    }
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'string | null' is not assignable... Remove this comment to see the full error message
    let isDarkThemeActive = JSON.parse(window.localStorage.getItem('isDarkThemeActive'));
    if (isDarkThemeActive == null) {
      isDarkThemeActive =
        window.matchMedia('(prefers-color-scheme: dark)').matches || this.darkModeConfig.default;
    }
    this.setState({ isDarkThemeActive });
    return isDarkThemeActive;
  };

  toggleActiveTheme = () => {
    if (!this.darkModeConfig.enabled) {
      console.warn('Dark mode is disabled, but trying to activate it.');
      return false;
    }
    this.setState((prevState: any) => ({
      isDarkThemeActive: !prevState.isDarkThemeActive
    }));

    window.localStorage.setItem('isDarkThemeActive', JSON.stringify(!this.state.isDarkThemeActive));
    return !this.state.isDarkThemeActive;
  };

  render() {
    const { children } = this.props;
    const { isDarkThemeActive } = this.state;
    const currentActiveTheme = isDarkThemeActive ? dark : light;

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <EmotionThemeProvider theme={currentActiveTheme}>{children}</EmotionThemeProvider>
      </div>
    );
  }
}
