const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = [
  merge(common.main, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
  }),
];
