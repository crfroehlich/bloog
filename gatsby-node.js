'use strict';

require('source-map-support').install();
require('ts-node').register();

cost node = require('./gatsby-node.ts');

module.exports = node;