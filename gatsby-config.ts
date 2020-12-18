import { writeFileSync } from 'fs';
import { orderBy } from 'lodash';
import path from 'path';
import { getConf } from './build/configLoader';
import { emojiTools as emoji } from './src/utils/emoji';
import { getSearchPlugins } from './src/utils/search';

require('dotenv').config();

const config = getConf();
writeFileSync('.config.js', `export default ${JSON.stringify(config)}`);

const plugins: Array<string | { resolve: string; options: any }> = [
  'gatsby-plugin-loadable-components-ssr',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-pinterest',
  'gatsby-plugin-twitter',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/templates/docs.tsx`),
    },
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-remove-trailing-slashes',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.inline\.svg$/,
      },
    },
  },
  'gatsby-plugin-react-helmet',
  'gatsby-source-local-git',
  'gatsby-plugin-ts',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'docs',
      path: `${__dirname}/content/`,
    },
  },
  {
    resolve: `gatsby-transformer-gitinfo`,
    options: {
      include: /\.mdx?$/i, // Only .md files
    },
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      remarkPlugins: [require('remark-emoji'), require('remark-abbr')],
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-mermaid',
          options: {
            language: config.features.mermaid.language,
            theme: config.features.mermaid.theme,
            viewport: {
              width: config.features.mermaid.width,
              height: config.features.mermaid.height,
            },
            mermaidOptions: config.features.mermaid.options,
          },
        },
        'gatsby-remark-graphviz',
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1050,
            quality: 75,
            showCaptions: true,
            disableBgImageOnAlpha: true,
            withWebp: true,
          },
        },
        'gatsby-remark-copy-linked-files',
        {
          resolve: 'gatsby-remark-jargon',
          options: { jargon: require('./build/jargon-config.ts') },
        },
        {
          resolve: `gatsby-remark-embed-snippet`,
          options: {
            directory: `${__dirname}/snippets/`,
          },
        },
        {
          resolve: `gatsby-remark-embedder`,
          options: {
            customTransformers: [
              // Your custom transformers
            ],
            services: {
              // The service-specific options by the name of the service
            },
          },
        },
      ],
      extensions: ['.mdx', '.md'],
    },
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      // your google analytics tracking id
      trackingId: config.metadata.gaTrackingId,
      // Puts tracking script in the head instead of the body
      head: true,
      // enable ip anonymization
      anonymize: false,
    },
  },
  {
    resolve: 'gatsby-plugin-root-import',
    options: {
      '~': path.join(__dirname, 'src'),
      images: path.join(__dirname, 'src/images'),
      styles: path.join(__dirname, 'src/styles'),
      css: path.join(__dirname, 'src/styles/main.css'),
    },
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: config.metadata.url,
      stripQueryString: true,
    },
  },
];

if (config.features.pageProgress && config.features.pageProgress.enabled) {
  plugins.push({
    resolve: 'gatsby-plugin-page-progress',
    options: {
      includePaths: config.features.pageProgress.includePaths,
      excludePaths: config.features.pageProgress.excludePaths,
      height: config.features.pageProgress.height,
      prependToBody: config.features.pageProgress.prependToBody,
      color: config.features.pageProgress.color,
    },
  });
}

if (config.features.rss && config.features.rss.enabled) {
  plugins.push({
    resolve: `gatsby-plugin-feed`,
    options: {
      ...config.features.rss,
      language: config.metadata.language,
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }: any) => {
            const items = allMdx.edges.map((edge: any) => {
              const { frontmatter } = edge.node;
              const { fields } = edge.node.parent;
              const rawTitle =
                frontmatter.metaTitle && frontmatter.metaTitle.length > 0
                  ? frontmatter.metaTitle
                  : frontmatter.title;
              const title = emoji.clean(rawTitle);
              const date = fields && fields.gitLogLatestDate ? fields.gitLogLatestDate : new Date();
              const author =
                fields && fields.gitLogLatestAuthorName ? fields.gitLogLatestAuthorName : 'unknown';
              return {
                title,
                description: frontmatter.description ? frontmatter.description : edge.node.excerpt,
                date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                author,
              };
            });
            return orderBy(items, ['date', 'title'], ['desc', 'asc']);
          },
          query: `
          {
            allMdx {
              edges {
                node {
                  excerpt
                  fields {
                    slug
                  }
                  parent {
                    ... on File {
                      fields {
                        gitLogLatestDate
                        gitLogLatestAuthorName
                      }
                    }
                  }
                  frontmatter {
                    title
                    metaTitle
                    description
                  }
                }
              }
            }
          }
          `,
          output: config.features.rss.outputPath,
          match: config.features.rss.matchRegex,
          title: config.features.rss.title ? config.features.rss.title : config.metadata.title,
        },
      ],
    },
  });
}

const searchPlugins = getSearchPlugins(config.features.search);
searchPlugins.forEach((plugin: any) => plugins.push(plugin));

// check and add pwa functionality
if (config.pwa && config.pwa.enabled && config.pwa.manifest) {
  plugins.push({
    resolve: `gatsby-plugin-manifest`,
    options: { ...config.pwa.manifest },
  });
  plugins.push({
    resolve: 'gatsby-plugin-offline',
    options: {
      appendScript: require.resolve(`./src/custom-sw-code.ts`),
    },
  });
  // plugins.push('gatsby-plugin-offline');
} else {
  plugins.push('gatsby-plugin-remove-serviceworker');
}

module.exports = {
  pathPrefix: config.metadata.pathPrefix,
  siteMetadata: {
    title: config.metadata.name,
    description: config.metadata.description,
    docsLocation: config.features.editOnRepo.location,
    docsLocationType: config.features.editOnRepo.type,
    editable: config.features.editOnRepo.editable,
    siteImage: config.metadata.siteImage,
    favicon: config.metadata.favicon,
    logo: {
      link: config.header.logoLink ? config.header.logoLink : '/',
      image: config.header.logo,
    }, // backwards compatible
    headerTitle: config.metadata.name,
    helpUrl: config.header.helpUrl,
    headerLinks: config.header.links,
    siteUrl: config.metadata.url,
  },
  plugins,
};
