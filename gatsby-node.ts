import path from 'path';
import { startCase } from 'lodash';
import chokidar from 'chokidar';
import { touch } from './build/fileUtils';

export const createSchemaCustomization = ({
  actions
}: any) => {
  const { createTypes } = actions;

  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: MdxFrontmatter
    }
    type MdxFrontmatter {
      showToc: Boolean
      tocDepth: Int
      editable: Boolean
      showMetadata: Boolean
      showPreviousNext: Boolean
      description: String
      metaTitle: String
      order: Int
    }
    type File implements Node {
      fields: Fields
    }
    type Fields {
      gitLogLatestAuthorName: String
      gitLogLatestAuthorEmail: String
      gitLogLatestDate: Date @dateformat
    }
    type SiteSiteMetadata implements Node {
      headerLinks: [HeaderLinks]
    }
    type HeaderLinks {
      text: String!
      link: String
      external: Boolean
    }
  `;
  createTypes(typeDefs);
};

export const createPages = ({
  graphql,
  actions
}: any) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  fields {
                    id
                    slug
                  }
                }
              }
            }
          }
        `
      ).then((result: any) => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }
        actions.createPage({
          path: `/404.html`,
          component: path.join(process.cwd(), 'src/pages/404.tsx'),
        });

        // Create pages.
        result.data.allMdx.edges.forEach(({
          node
        }: any) => {
          createPage({
            path: node.fields.slug ? node.fields.slug : '/',
            component: path.resolve('./src/templates/docs.tsx'),
            context: {
              id: node.fields.id,
            },
          });
        });
      })
    );
  });
};

export const onCreateWebpackConfig = ({
  actions
}: any) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        $components: path.resolve(__dirname, 'src/components'),
        buble: '@philpl/buble', // to reduce bundle size
      },
    },
  });
};

export const onCreateBabelConfig = ({
  actions
}: any) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from',
  });
};

export const onCreateNode = ({
  node,
  getNode,
  actions
}: any) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    let value = parent.relativePath.replace(parent.ext, '');

    if (value === 'index') {
      value = '';
    }

    createNodeField({
      name: `slug`,
      node,
      value: `/${value}`,
    });

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name),
    });
  }
};

export const onPreBootstrap = () => {
  const watcher = chokidar.watch('./config', {
    ignored: ['jargon*'],
  });
  watcher.on(`change`, () => {
    touch('./gatsby-config.ts');
  });
};
