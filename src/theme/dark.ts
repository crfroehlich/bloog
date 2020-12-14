// @ts-expect-error ts-migrate(2613) FIXME: Module '"/home/fro/code/template/src/theme/colors"... Remove this comment to see the full error message
import defaultColors from './colors';

export const dark = {
  colors: {
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
  }
};
