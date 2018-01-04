const path = require('path');
const webpack = require('webpack');
// Generate html template
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Clean bundle folder
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: '[hash].styles.css',
      disable: process.env.NODE_ENV !== 'production'
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'Rou Rou',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      author: 'rou rou test',
      template: 'src/index.html',
      hash: process.env.NODE_ENV === 'production'
    })
  ]
};
