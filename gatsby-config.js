require('source-map-support').install();
require('ts-node').register();

const config = require('./gatsby-config.ts');
// config.flags = {
//   FAST_REFRESH: true,
//   LAZY_IMAGES: true,
//   PARALLEL_SOURCING: true,
//   PRESERVE_FILE_DOWNLOAD_CACHE: true,
//   PRESERVE_WEBPACK_CACHE: true,
//   QUERY_ON_DEMAND: true,
// };
module.exports = config;
