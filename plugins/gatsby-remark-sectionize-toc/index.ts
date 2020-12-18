import findAfter from 'unist-util-find-after';
import visit from 'unist-util-visit-parents';

const MAX_HEADING_DEPTH = 6;

const transform = (tree: any, maxDepth: any) => {
  const maxTocDepth = maxDepth ? maxDepth : MAX_HEADING_DEPTH;
  const visitFunction = sectionize(maxTocDepth);
  for (let depth = MAX_HEADING_DEPTH; depth > 0; depth--) {
    console.log(tree)
    visit(tree, (node: any) => node.type === 'heading' && node.depth === depth, visitFunction);
  }
  return tree;
};

const sectionize = (maxTocDepth: any) => {
  let minDepth = MAX_HEADING_DEPTH;
  return (node: any, ancestors: any) => {
    const start = node;
    const depth = start.depth;
    const parent = ancestors[ancestors.length - 1];
    minDepth = depth < minDepth ? depth : minDepth;
    const isEnd = (node: any) => (node.type === 'heading' && node.depth <= depth) ||
    // node.depth - (minDepth - 1) was added to fix case, when headers
    // do not start from h1 or h2 (etc..)
    (node.type === 'section' &&
      node.depth > depth &&
      node.depth - (minDepth - 1) <= maxTocDepth) ||
    node.type === 'export';
    const end = findAfter(parent, start, isEnd);
    const startIndex = parent.children.indexOf(start);
    const endIndex = parent.children.indexOf(end);

    const between = parent.children.slice(startIndex, endIndex > 0 ? endIndex : undefined);

    const section = {
      type: 'section',
      depth: depth,
      children: between,
      data: {
        hName: 'section',
      },
    };
    parent.children.splice(startIndex, section.children.length, section);
  };
};

export const sectionizeToc = ({
  markdownAST,
  markdownNode
}: any, pluginOptions: any) => {
  const maxDepth = markdownNode.frontmatter.tocDepth
    ? markdownNode.frontmatter.tocDepth
    : pluginOptions.maxDepth;
  const tree = transform(markdownAST, maxDepth);
  console.log(tree);
  return tree;
};
