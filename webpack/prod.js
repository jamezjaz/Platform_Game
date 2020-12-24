/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

const merge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin'); // To copy your // assets to the build folder
const base = require('./base');

module.exports = merge(base, {
  mode: 'development',
  output: {
    filename: 'bundle.min.js',
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/assets', to: 'src/assets' }, // Configure // the path from where webpack will copy your assets from and the  // path where it will put it when the build is done, change it     // according to your app organization
      ],
    }),
  ],
});
