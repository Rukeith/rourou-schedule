const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const kk = merge(common, {
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,  // enable HMR on the server
    port: 3000,
    contentBase: './dist',  // Tell the server where to serve content from
    historyApiFallback: true, // respond to 404s with index.html
  },
  devtool: 'inline-source-map'
});
console.log('kk =', kk);
module.exports = kk;