import { colors as defaultColors } from './colors';
import colorfn from 'color';
import { increaseIntensivity, decreaseIntensivity, grayscaleCompatible } from '../utils/colors';
import { IBaseTheme, IContent, IHeader, IHighlights, INavigationSidebar, IPageLayout, IScrollTop, ISearch, ITable, IThemeColors, ITransitions } from './ITheme';

const colors: IThemeColors = {
  ...defaultColors,

  primary: defaultColors.red,
  primaryDark: defaultColors.blueDark,
  fontLight: '#efefef',
  font: '#dddddd',
  fontDark: '#8a8a8a',
  background: '#29282A',
  mainBackground: '#1E1E1F',
  border: '#323234',
  hover: defaultColors.red,
  shadow: defaultColors.gray + '33',
};

const pageLayout: IPageLayout = {
  leftWidth: '318px',
  leftMargin: '30px',
  rightWidth: '',
  rightMargin: '',
};

const transitions: ITransitions = {
  hover: 'all .5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s',
  hoverFast: 'all .3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s',
  hoverColor: 'color .5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s',
};

const contend = (colors: IThemeColors): IContent => ({
  background: colors.mainBackground,
  border: colors.border,
  font: colors.font,
  titleFont: increaseIntensivity(colors.font, 0.15),

  code: {
    border: colors.border,
    font: colors.fontDark,
    background: colors.background,
  }
});

const navigationSidebar = (colors: IThemeColors): INavigationSidebar => ({
  backgroundSecondary: colors.background,
  backgroundPrimary: colors.background,
  border: colors.border,

  row: {
    hover: colors.border,
    active: colorfn(colors.white).mix(colorfn(colors.background)).whiten(3.5).hex(),
    activeBorder: colors.border,
    collapseHover: colors.hover,
  },

  fond: {
    group: decreaseIntensivity(colors.font, 0.25),
    base: colors.font,
    nested: decreaseIntensivity(colors.font, 0.25),
    active: colors.primary,
    hover: colors.primary,
  },

  poweredBy: {
    font: colors.grayLight,
    background: colors.border,
    hover: colors.primary,
  }
});

const header = (colors: IThemeColors): IHeader => ({
  background: colors.background,
  shadow: colors.shadow,

  fond: {
    base: colors.primary,
    hover: colorfn(colors.primary).negate().hex(),
  },

  border: colors.border,

  icons: {
    background: colors.background,
    shadow: colors.shadow,
    fill: decreaseIntensivity(colors.background, 0.4),
    stroke: decreaseIntensivity(colors.background, 0.4),
    hover: colors.primary,
  }
});

const search = (colors: IThemeColors): ISearch => ({
  background: colors.background,

  mark: {
    font: colors.font,
    background: colors.primary,
  },

  fond: {
    base: colors.font,
    hover: colors.font,
    highlight: colors.fontDark,
  },

  hover: colors.border,
  border: colors.border,

  pagination: {
    background: colors.mainBackground,
    border: colors.border,
    font: colors.font,
    hover: colors.border,
    currend: {
      background: colors.primary,
      font: grayscaleCompatible(colors.primary),
    },
  }
});

const editOnRepo = (colors: IThemeColors): IContent => ({
  background: colors.background,
  border: colors.border,
  hover: colors.hover,

  fond: {
    base: colors.font,
    hover: grayscaleCompatible(colors.hover),
  }
});

const jargon = (colors: IThemeColors): IContent => ({
  background: colors.background,
  border: colors.border,
  font: colors.font,
  shadow: colors.shadow
});

const highlights = (colors: IThemeColors): IHighlights => ({
  warning: {
    border: colors.orange,
    background: colors.orangeLight,
    font: colors.fontDark,
  },

  error: {
    border: colors.red,
    background: colors.redLight,
    font: colors.fontDark,
  },

  info: {
    border: colors.blue,
    background: colors.blueLight,
    font: colors.fontDark,
  },

  tip: {
    border: colors.green,
    background: colors.greenLight,
    font: colors.fontDark,
  }
});

const table = (colors: IThemeColors): ITable => ({
  header: {
    background: colors.primary,
    font: increaseIntensivity(colorfn(colors.primary).negate().grayscale(), 0.5),
  },

  oddRow: colors.mainBackground,
  evenRow: colors.background,
  rowHover: colors.hover + '3d',
  border: colors.border
});

const tableOfContents = (colors: IThemeColors): IContent => ({
  background: colors.mainBackground,

  fond: {
    base: decreaseIntensivity(colors.font, 0.15),
    hover: colors.primary,
    current: colors.primary,
  },

  border: colors.border
});

const previousNext = (colors: IThemeColors): IContent => ({
  background: colors.mainBackground,
  hover: colors.primary,
  font: colors.font,
  fontLabel: decreaseIntensivity(colors.font, 0.45),
  border: colors.border,
  shadow: colors.shadow
});

const scrollTop = (colors: IThemeColors): IScrollTop => ({
  background: colors.primary,
  hover: increaseIntensivity(colors.primary, 0.15),
  arrow: colorfn(colors.primary).negate().grayscale().lighten(0.4).rgb().string()
});

export const base: IBaseTheme = {
  colors,
  contend,
  editOnRepo,
  header,
  highlights,
  jargon,
  layout: pageLayout,
  navigationSidebar,
  previousNext,
  scrollTop,
  search,
  table,
  tableOfContents,
  transitions,
};
