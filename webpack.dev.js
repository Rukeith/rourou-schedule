const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true, // enable HMR on the server
    port: 8080,
    compress: true,
    contentBase: path.join(__dirname, 'dist'), // Tell the server where to serve content from
    historyApiFallback: true, // respond to 404s with index.html
  },
});
