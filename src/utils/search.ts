export const query = (excerptSize: any) => `{
    allMdx {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
          excerpt(pruneLength: ${excerptSize})
        }
      }
    }
  }`;

const flatten = (arr: any) =>
  arr.map(
    ({
      node: {
        id,
        frontmatter: { title, description },
        fields: { slug },
        excerpt,
      },
    }: any) => ({
      id,
      title,
      description,
      slug,
      excerpt,
    })
  );

const transformer = ({ data }: any) => flatten(data.allMdx.edges);

const buildLocalsearchPluginConfig = (conf: any) => {
  return [
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        engine: 'flexsearch',
        engineOptions: conf.localSearchEngine,
        query: query(8000),
        normalizer: transformer,
        name: 'HmD',
        ref: 'id',
        index: ['title', 'description', 'excerpt', 'slug'],
        store: ['id', 'slug', 'title', 'description', 'excerpt'],
      },
    },
  ];
};

export const getSearchPlugins = (conf: any) => buildLocalsearchPluginConfig(conf);
