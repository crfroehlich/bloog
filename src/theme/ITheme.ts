export interface IThemeColors extends IDefaultColors {
  background: string;
  border: string;
  font: string;
  fontDark?: string;
  fontLight?: string;
  hover: string;
  mainBackground: string;
  primary: string;
  primaryDark: string;
  shadow: string;
}

export interface IDefaultColors {
  black: string;
  blue: string;
  blueDark: string;
  blueLight: string;
  blueTag: string;
  gray: string;
  grayDark: string;
  grayLight: string;
  green: string;
  greenLight: string;
  orange: string;
  orangeLight: string;
  red: string;
  redLight: string;
  violet: string;
  white: string;
  yellow: string;
}

export interface IPageLayout extends IContent {
  leftMargin: string;
  leftWidth: string;
  rightMargin: string;
  rightWidth: string;
}

export interface ITransitions extends IContent {
  hoverFast: string;
  hoverColor: string;
}

export interface IContent {
  active?: string;
  activeBorder?: string;
  align?: string;
  background?: string;
  base?: string;
  border?: string;
  code?: IContent;
  collapseHover?: string;
  currend?: IContent;
  current?: string;
  direction?: string;
  fill?: string;
  fond?: IContent;
  font?: string;
  fontLabel?: string;
  fontHover?: string;
  group?: string;
  highlight?: string;
  hover?: string;
  hoverFill?: string;
  hoverStroke?: string;
  nested?: string;
  shadow?: string;
  show?: boolean;
  stroke?: string;
  titleFont?: string;
}

export interface INavigationSidebar extends IContent {
  backgroundPrimary: string;
  backgroundSecondary: string;
  poweredBy: IContent;
  row: IContent;
}

export interface IHeader extends IContent {
  icons: IContent;
}

export interface ISearch extends IContent {
  mark: IContent;
  pagination: IContent;
  fond: IContent;
}

export interface IHighlights extends IContent {
  error: IContent;
  info: IContent;
  tip: IContent;
  warning: IContent;
}

export interface ITable extends IContent {
  evenRow: string;
  header: IContent;
  oddRow: string;
  rowHover: string;
}

export interface IScrollTop extends IContent {
  arrow: string;
}

export interface IBaseTheme {
  colors: IThemeColors;
  contend: () => IContent;
  editOnRepo: () => IContent;
  header: () => IHeader;
  highlights: () => IHighlights;
  jargon: () => IContent;
  layout: IPageLayout;
  navigationSidebar: () => INavigationSidebar;
  previousNext: () => IContent;
  scrollTop: () => IScrollTop;
  search: () => ISearch;
  table: () => ITable;
  tableOfContents: () => IContent;
  transitions: ITransitions;
}

export interface IEmotionTheme {
  colors: IThemeColors;
  contend: IContent;
  editOnRepo: IContent;
  header: IHeader;
  highlights: IHighlights;
  jargon: IContent;
  layout: IPageLayout;
  navigationSidebar: INavigationSidebar;
  previousNext: IContent;
  scrollTop: IScrollTop;
  search: ISearch;
  table: ITable;
  tableOfContents: IContent;
  transitions: ITransitions;
}
