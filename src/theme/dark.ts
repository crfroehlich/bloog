import { colors as defaultColors } from './colors';
import { IColors, IThemeColors } from './ITheme';

const darkColors: IThemeColors = {
  ...defaultColors,
  primary: defaultColors.red,
  primaryDark: defaultColors.blueDark,
  font: '#dddddd',
  fontDark: '#8a8a8a',
  background: '#29282A',
  mainBackground: '#1E1E1F',
  border: '#323234',
  hover: defaultColors.red,
  shadow: defaultColors.gray + '33',
};

export const dark: IColors = { colors: darkColors };
