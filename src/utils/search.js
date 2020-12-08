const query = (excerptSize) => `{
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

const flatten = (arr) =>
  arr.map(({ node: { id, frontmatter: { title, description }, fields: { slug }, excerpt } }) => ({
    id,
    title,
    description,
    slug,
    excerpt,
  }));

const transformer = ({ data }) => flatten(data.allMdx.edges);

const buildLocalsearchPluginConfig = () => {
  return [
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        engine: 'flexsearch',
        engineOptions: 'default',
        query: query(8000),
        normalizer: transformer,
        name: 'Boogi',
        ref: 'id',
        index: ['title', 'description', 'excerpt', 'slug'],
        store: ['id', 'slug', 'title', 'description', 'excerpt'],
      },
    },
  ];
};

module.exports.getSearchPlugins = () => {
  return buildLocalsearchPluginConfig();
};
