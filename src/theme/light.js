import defaultColors from './colors';

export const light = {
  colors: {
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
  }
};
