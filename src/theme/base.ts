import colorfn from 'color';
import { decreaseIntensivity, grayscaleCompatible, increaseIntensivity } from '../utils/colors';
import {
  IBaseTheme,
  IContent,
  IEmotionTheme,
  IHeader,
  IHighlights,
  INavigationSidebar,
  IPageLayout,
  IScrollTop,
  ISearch,
  ITable,
  ITransitions,
} from './ITheme';

const baseColors = {
  blueDark: '#264D99',
  gray: '#5C6975',
  red: '#E40046',
};

const themeColors = {
  background: '#29282A',
  black: '#000000',
  blue: '#0066CC',
  blueDark: baseColors.blueDark,
  blueLight: '#CDDFF5',
  border: '#323234',
  font: '#dddddd',
  fontDark: '#8a8a8a',
  fontLight: '#efefef',
  gray: '#5C6975',
  grayDark: '#3B4656',
  grayLight: '#AEAEAE',
  green: '#00965E',
  greenLight: '#D0EBE1',
  hover: baseColors.red,
  mainBackground: '#1E1E1F',
  orange: '#ED8B00',
  orangeLight: '#FBE9D0',
  primary: baseColors.red,
  primaryDark: baseColors.blueDark,
  red: baseColors.red,
  redLight: '#FAD0DD',
  shadow: `${baseColors.gray}33`,
  violet: '#A05EB5',
  white: '#FFFFFF',
  yellow: '#FFC72C',
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

const contend = (): IContent => ({
  background: themeColors.mainBackground,
  border: themeColors.border,
  font: themeColors.font,
  titleFont: increaseIntensivity(themeColors.font, 0.15),

  code: {
    border: themeColors.border,
    font: themeColors.fontDark,
    background: themeColors?.background,
  },
});

const navigationSidebar = (): INavigationSidebar => ({
  backgroundSecondary: themeColors.background,
  backgroundPrimary: themeColors.background,
  border: themeColors.border,

  row: {
    hover: themeColors.border,
    active: colorfn(themeColors.white).mix(colorfn(themeColors.background)).whiten(3.5).hex(),
    activeBorder: themeColors.border,
    collapseHover: themeColors.hover,
  },

  fond: {
    group: decreaseIntensivity(themeColors.font, 0.25),
    base: themeColors.font,
    nested: decreaseIntensivity(themeColors.font, 0.25),
    active: themeColors.primary,
    hover: themeColors.primary,
  },

  poweredBy: {
    font: themeColors.grayLight,
    background: themeColors.border,
    hover: themeColors.primary,
  },
});

const header = (): IHeader => ({
  background: themeColors.background,
  shadow: themeColors.shadow,

  fond: {
    base: themeColors.primary,
    hover: colorfn(themeColors.primary).negate().hex(),
  },

  border: themeColors.border,

  icons: {
    background: themeColors.background,
    shadow: themeColors.shadow,
    fill: decreaseIntensivity(themeColors.background, 0.4),
    stroke: decreaseIntensivity(themeColors.background, 0.4),
    hover: themeColors.primary,
  },
});

const search = (): ISearch => ({
  background: themeColors.background,

  mark: {
    font: themeColors.font,
    background: themeColors.primary,
  },

  fond: {
    base: themeColors.font,
    hover: themeColors.font,
    highlight: themeColors.fontDark,
  },

  hover: themeColors.border,
  border: themeColors.border,

  pagination: {
    background: themeColors.mainBackground,
    border: themeColors.border,
    font: themeColors.font,
    hover: themeColors.border,
    currend: {
      background: themeColors.primary,
      font: grayscaleCompatible(themeColors.primary),
    },
  },
});

const editOnRepo = (): IContent => ({
  background: themeColors.background,
  border: themeColors.border,
  hover: themeColors.hover,

  fond: {
    base: themeColors.font,
    hover: grayscaleCompatible(themeColors.hover),
  },
});

const jargon = (): IContent => ({
  background: themeColors.background,
  border: themeColors.border,
  font: themeColors.font,
  shadow: themeColors.shadow,
});

const highlights = (): IHighlights => ({
  warning: {
    border: themeColors.orange,
    background: themeColors.orangeLight,
    font: themeColors.fontDark,
  },

  error: {
    border: themeColors.red,
    background: themeColors.redLight,
    font: themeColors.fontDark,
  },

  info: {
    border: themeColors.blue,
    background: themeColors.blueLight,
    font: themeColors.fontDark,
  },

  tip: {
    border: themeColors.green,
    background: themeColors.greenLight,
    font: themeColors.fontDark,
  },
});

const table = (): ITable => ({
  header: {
    background: themeColors.primary,
    font: increaseIntensivity(colorfn(themeColors.primary).negate().grayscale(), 0.5),
  },

  oddRow: themeColors.mainBackground,
  evenRow: themeColors.background,
  rowHover: `${themeColors.hover}3d`,
  border: themeColors.border,
});

const tableOfContents = (): IContent => ({
  background: themeColors.mainBackground,

  fond: {
    base: decreaseIntensivity(themeColors.font, 0.15),
    hover: themeColors.primary,
    current: themeColors.primary,
  },

  border: themeColors.border,
});

const previousNext = (): IContent => ({
  background: themeColors.mainBackground,
  hover: themeColors.primary,
  font: themeColors.font,
  fontLabel: decreaseIntensivity(themeColors.font, 0.45),
  border: themeColors.border,
  shadow: themeColors.shadow,
});

const scrollTop = (): IScrollTop => ({
  background: themeColors.primary,
  hover: increaseIntensivity(themeColors.primary, 0.15),
  arrow: colorfn(themeColors.primary).negate().grayscale().lighten(0.4).rgb().string(),
});

export const base: IBaseTheme = {
  colors: themeColors,
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

export const compiledTheme: IEmotionTheme = {
  colors: themeColors,
  contend: contend(),
  editOnRepo: editOnRepo(),
  header: header(),
  highlights: highlights(),
  jargon: jargon(),
  layout: pageLayout,
  navigationSidebar: navigationSidebar(),
  previousNext: previousNext(),
  scrollTop: scrollTop(),
  search: search(),
  table: table(),
  tableOfContents: tableOfContents(),
  transitions,
};
