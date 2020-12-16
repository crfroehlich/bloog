export const configDefaults: IConfig = {
  metadata: {
    description: '',
    favicon: '/assets/favicon.png',
    gaTrackingId: '',
    language: 'en',
    name: 'BooGi',
    ogImage: '',
    pathPrefix: '/',
    short_name: 'BooGi',
    siteImage: '',
    themeColor: '#',
    title: '',
    url: 'http://localhost',
  },
  header: {
    logo: '',
    logoLink: '/',
    helpUrl: '',
  },
  sidebar: {
    enabled: true,
    ignoreIndex: true,
    forcedNavOrder: [],
    expanded: [],
    groups: [],
    links: [],
    poweredBy: {
      link: '',
      name: '',
      trademark: '',
    },
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'BooGi',
      short_name: 'BooGi',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'minimal-ui',
      crossOrigin: 'anonymous',
    },
  },
  social: {
    facebook: '',
    github: '',
    gitlab: '',
    linkedin: '',
    mail: '',
    gmail: '',
    slack: '',
    twich: '',
    twitter: '',
    youtube: '',
  },
  features: {
    editOnRepo: {
      editable: true,
      location: 'https://github.com/filipowm/boogi',
      type: 'github',
    },
    search: {
      enabled: true,
      indexName: 'docs',
      excerptSize: 20000,
      engine: 'localsearch',
      placeholder: 'Search',
      startComponent: 'icon', // 'input',
      debounceTime: 380,
      snippetLength: 23,
      hitsPerPage: 10,
      showStats: true,
      localSearchEngine: {
        encode: "advanced",
        tokenize: "full",
        threshold: 2,
        resolution: 30,
        depth: 20
      },
      pagination: {
        enabled: true,
        totalPages: 10,
        showNext: true,
        showPrevious: true,
      },
    },
    toc: {
      show: true,
      depth: 3,
    },
    previousNext: {
      enabled: true,
      arrowKeyNavigation: true,
    },
    scrollTop: true,
    showMetadata: true,
    pageProgress: {
      enabled: false,
      includePaths: [],
      excludePaths: ['/'],
      height: 3,
      prependToBody: false,
      color: '#A05EB5',
    },
    mermaid: {
      language: 'mermaid',
      theme: 'dark', // default, dark, forest, neutral
      options: {}, // https://mermaidjs.github.io/#/mermaidAPI
      width: 300,
      height: 300,
    },
    rss: {
      enabled: true,
      showIcon: true,
      title: 'My RSS feed',
      copyright: '',
      webMaster: 'M',
      managingEditor: '',
      categories: ['GatsbyJS', 'Docs'],
      ttl: '60',
      matchRegex: '^/',
      outputPath: '/rss.xml',
      generator: 'gidocs',
    },
    darkMode: {
      enabled: true,
      default: false,
    },
    fullScreenMode: {
      enabled: false,
      hideHeader: true,
      hideToc: true,
      hideSidebar: true
    }
  },
};

export interface IConfig {
  metadata: Metadata;
  header:   Header;
  sidebar:  Sidebar;
  pwa:      Pwa;
  social:   Social;
  features: Features;
}

interface Features {
  editOnRepo:     EditOnRepo;
  search:         Search;
  toc:            Toc;
  previousNext:   PreviousNext;
  scrollTop:      boolean;
  showMetadata:   boolean;
  pageProgress:   PageProgress;
  mermaid:        Mermaid;
  rss:            RSS;
  darkMode:       DarkMode;
  fullScreenMode: FullScreenMode;
}

interface DarkMode {
  enabled: boolean;
  default: boolean;
}

interface EditOnRepo {
  editable: boolean;
  location: string;
  type:     string;
}

interface FullScreenMode {
  enabled:     boolean;
  hideHeader:  boolean;
  hideToc:     boolean;
  hideSidebar: boolean;
}

interface Mermaid {
  language: string;
  theme:    string;
  options:  any;
  width:    number;
  height:   number;
}

interface PoweredBy {
  name:       string;
  link:       string;
  trademark:  string;
}

interface PageProgress {
  color:         string;
  enabled:       boolean;
  excludePaths:  string[];
  height:        number;
  includePaths:  string[];
  prependToBody: boolean;
}

interface PreviousNext {
  enabled:            boolean;
  arrowKeyNavigation: boolean;
}

interface RSS {
  enabled:        boolean;
  showIcon:       boolean;
  title:          string;
  copyright:      string;
  webMaster:      string;
  managingEditor: string;
  categories:     string[];
  ttl:            string;
  matchRegex:     string;
  outputPath:     string;
  generator:      string;
}

interface Search {
  enabled:           boolean;
  indexName:         string;
  excerptSize:       number;
  engine:            string;
  placeholder:       string;
  startComponent:    string;
  debounceTime:      number;
  snippetLength:     number;
  hitsPerPage:       number;
  showStats:         boolean;
  localSearchEngine: LocalSearchEngine;
  pagination:        Pagination;
}

interface LocalSearchEngine {
  encode:     string;
  tokenize:   string;
  threshold:  number;
  resolution: number;
  depth:      number;
}

interface Pagination {
  enabled:      boolean;
  totalPages:   number;
  showNext:     boolean;
  showPrevious: boolean;
}

interface Toc {
  show:  boolean;
  depth: number;
}

interface Header {
  logo:     string;
  logoLink: string;
  helpUrl:  string;
  links?:   { link: string; text: string; external: string; }[];
}

interface Metadata {
  description:  string;
  favicon:      string;
  gaTrackingId: string;
  language:     string;
  name:         string;
  ogImage:      string;
  pathPrefix:   string;
  short_name:   string;
  siteImage:    string;
  themeColor:   string;
  title:        string;
  url:          string;
}

interface Pwa {
  enabled:  boolean;
  manifest: Manifest;
}

interface Manifest {
  name:             string;
  short_name:       string;
  start_url:        string;
  background_color: string;
  theme_color:      string;
  display:          string;
  crossOrigin:      string;
}

interface Sidebar {
  enabled:        boolean;
  ignoreIndex:    boolean;
  forcedNavOrder: any[];
  expanded:       any[];
  groups:         any[];
  links:          any[];
  poweredBy:      PoweredBy;
}

interface Social {
  facebook: string;
  github:   string;
  gitlab:   string;
  linkedin: string;
  mail:     string;
  gmail:    string;
  slack:    string;
  twich:    string;
  twitter:  string;
  youtube:  string;
}