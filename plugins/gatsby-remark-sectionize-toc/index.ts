const sectionizeToc = require('./sectionize-toc');

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'transform'... Remove this comment to see the full error message
const transform = sectionizeToc();

module.exports = function ({
  markdownAST,
  markdownNode
}: any, pluginOptions: any) {
  const maxDepth = markdownNode.frontmatter.tocDepth
    ? markdownNode.frontmatter.tocDepth
    : pluginOptions.maxDepth;
  transform(markdownAST, maxDepth);
};
