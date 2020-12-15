export interface IThemeColors extends IDefaultColors {
  background:     string;
  border:         string;
  font:           string;
  fontDark?:       string;
  fontLight?:      string;
  hover:          string;
  mainBackground: string;
  primary:        string;
  primaryDark:    string;
  shadow:         string;
}

export interface IDefaultColors {
  black:       string;
  blue:        string;
  blueDark:    string;
  blueLight:   string;
  gray:        string;
  grayDark:    string;
  grayLight:   string;
  green:       string;
  greenLight:  string;
  orange:      string;
  orangeLight: string;
  red:         string;
  redLight:    string;
  violet:      string;
  white:       string;
  yellow:      string;
}

export interface IColors {
  colors: IThemeColors;
}

export interface IPageLayout {
  leftMargin:  string;
  leftWidth:   string;
  rightMargin: string;
  rightWidth:  string;
}

export interface ITransitions {
  hover:      string;
  hoverFast:  string;
  hoverColor: string;
}

export interface IContent {
  background:   string;
  border:       string;
  font:         string;
  titleFont:    string;

  code: {
    background: string;
    border:     string;
    font?:      string;
  }
}

export interface INavigationSidebar {
  backgroundSecondary: string;
  backgroundPrimary:   string;
  border:              string;

  row: {
    active:            string;
    activeBorder:      string;
    collapseHover:     string;
    hover:             string;
  };

  font: {
    active:            string;
    base:              string;
    group:             string;
    hover:             string;
    nested:            string;
  };

  poweredBy: {
    background:        string;
    font:              string;
    hover:             string;
  }
}

export interface IHeader {
  background:   string;
  shadow:       string;

  font: {
    base:       string;
    hover:      string;
  };

  border:       string;

  icons: {
    background: string;
    fill:       string;
    hover:      string;
    shadow:     string;
    stroke:     string;
  }
}

export interface ISearch {
  background:     string;

  mark: {
    background:   string;
    font:         string;
  };

  font: {
    base:         string;
    highlight?:   string;
    hover:        string;
  };

  hover:          string;
  border:         string;

  pagination: {
    background:   string;
    border:       string;
    current: {
      background: string;
      font:       string;
    };
    font:         string;
    hover:        string;
  }
}

export interface IEditOnRepo {
  background: string;
  border:     string;
  hover:      string;

  font: {
    base:     string;
    hover:    string;
  }
}

export interface IJargon {
  background: string;
  border:     string;
  font:       string;
  shadow:     string;
}

export interface IHighlights {
  warning: {
    border:     string;
    background: string;
    font?:      string;
  };

  error: {
    border:     string;
    background: string;
    font?:      string;
  };

  info: {
    border:     string;
    background: string;
    font?:      string;
  };

  tip: {
    border:     string;
    background: string;
    font?:      string;
  }
}

export interface ITable {
  header: {
    background: string;
    font:       string;
  };

  border:       string;
  evenRow:      string;
  oddRow:       string;
  rowHover:     string;
}

export interface ITableOfContents {
  background: string;

  font: {
    base:     string;
    hover:    string;
    current:  string;
  };

  border:     string;
}

export interface IPreviousNext {
  background: string;
  hover:      string;
  font:       string;
  fontLabel:  string;
  border:     string;
  shadow:     string;
}

export interface IScrollTop {
  background: string;
  hover:      string;
  arrow:      string;
}

export interface IBaseTheme {
  colors:             IThemeColors;
  content:            (colors: IThemeColors) => IContent;
  editOnRepo:         (colors: IThemeColors) => IEditOnRepo;
  header:             (colors: IThemeColors) => IHeader;
  highlights:         (colors: IThemeColors) => IHighlights;
  jargon:             (colors: IThemeColors) => IJargon;
  layout:             IPageLayout;
  navigationSidebar:  (colors: IThemeColors) => INavigationSidebar;
  previousNext:       (colors: IThemeColors) => IPreviousNext;
  scrollTop:          (colors: IThemeColors) => IScrollTop;
  search:             (colors: IThemeColors) => ISearch;
  table:              (colors: IThemeColors) => ITable;
  tableOfContents:    (colors: IThemeColors) => ITableOfContents;
  transitions:        ITransitions;
}