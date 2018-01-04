const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

const kk = merge(common, {
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: '[hash].styles.css',
      disable: true
    })
  ],
  devServer: {
    // 本地服务器所加载的页面所在的目录
    contentBase: './dist',
    inline: true, // 实时刷新
    port: 3000,
    host: 'localhost',
    hot: true,
    // enable HMR on the server
    historyApiFallback: true,
    // respond to 404s with index.html
  },
  devtool: 'inline-source-map'
});
console.log('kk =', kk);
module.exports = kk;