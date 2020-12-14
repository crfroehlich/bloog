const defaultOptions = {
    publishDraft: false,
};

exports.onCreateNode = ({
  node,
  actions
}: any, pluginOptions: any) => {
  const { createNodeField } = actions;

  const options = {
    ...defaultOptions,
    ...pluginOptions,
  };

  if (node.internal.type !== 'MarkdownRemark' && node.internal.type !== 'Mdx') {
    return;
  }

  const isDraft = options.publishDraft === false && node.frontmatter && node.frontmatter.draft === true;
  createNodeField({
    node,
    name: "draft",
    value: isDraft
  });

};