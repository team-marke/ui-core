const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const package = require('./package.json');
const hash = require('object-hash');

module.exports = {
  main: {
    entry: {
      app: './src/assets/js/main.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist/assets'),
      filename: '[name].' + hash.MD5(package) + '.js',
      chunkFilename: '[name].[chunkhash].js',
      publicPath: '/assets/',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'app.' + hash.MD5(package) + '.css',
        chunkFilename: '[name].[chunkhash].css',
      }),
      new Dotenv(),
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [['postcss-preset-env']],
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify'),
      },
    },
  },
  cms: {
    entry: {
      cms: './src/admin/cms.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist/admin/assets/'),
      filename: '[name].js',
      chunkFilename: '[name].[chunkhash].js',
      publicPath: '/admin/assets/',
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          include: [path.resolve(__dirname, 'src/admin')],
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-object-rest-spread'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        },
      ],
    },
  },
};
