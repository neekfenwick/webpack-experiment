const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This file would be duplicated for each bundle we want to build
// build with: npx webpack --mode development --config webpack.config.js
module.exports = {
  entry: {
    index: {
      import: './src/index.js'
    },
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
      static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development2',
      //chunks: [ 'index' ]
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/lib/webpack-experiment/dist/',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
};