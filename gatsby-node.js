require('source-map-support').install();
require('ts-node').register();

const node = require('./gatsby-node.ts');

module.exports = node;
