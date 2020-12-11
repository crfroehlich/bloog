interface Nested {
  background?: string;
  border?: string;
  font?: {
    base?: string;
    hover?: string;
    current?: string;
  },
  hover?: string;
  pagination?: Nested;
  current?: Nested;
  fontHover?: string;
  shadow?: string;
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