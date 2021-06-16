const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const package = require('./package.json');

module.exports = [
  merge(common.main, {
    mode: 'production',
    cache: {
      name: 'production-build-main',
      type: 'filesystem',
      version: package.version,
    }
  }),
];
