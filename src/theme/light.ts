import { colors as defaultColors } from './colors';
import { IBaseTheme, IThemeColors } from './ITheme';

const lightColors: IThemeColors = {
  ...defaultColors,
  primary: defaultColors.blue,
  primaryDark: defaultColors.blueDark,
  font: '#333334',
  fontDark: '#121213',
  background: '#F5F7F9',
  mainBackground: '#fefefe',
  border: '#DBDDDF',
  hover: defaultColors.blue,
  shadow: defaultColors.gray + '33',
};

export const light: Partial<IBaseTheme> = { colors: lightColors };
