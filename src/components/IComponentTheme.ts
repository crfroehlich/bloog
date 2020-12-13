interface Nested {
  background?: string;
  border?: string;
  base?: string;
  font?: Nested,
  hover?: string;
  pagination?: Nested;
  current?: Nested;
  fontHover?: string;
  shadow?: string;
  primary?: string;
  gray?: string;
  grayDark?: string;
  grayLight?: string;
}

export interface IComponentTheme {
  background?: string;
  fill?: string;
  hoverFill?: string;
  hoverStroke?: string;
  icon?: string;
  isCurrent?: boolean;
  isDarkThemeActive: boolean;
  level?: number;
  openImg?: string;
  closedImg?: string;
  show?: string;
  stroke?: string;
  toggleActiveTheme: (...args: any[]) => any;
  theme?: {
    editOnRepo?: Nested,
    search?: Nested,
    tableOfContents?: Nested,
    transitions?: Nested,
    colors?: Nested,
  }
}