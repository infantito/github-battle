var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // devtool: 'cheap-module-source-map',
  entry: './source/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.(css)$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] },
    ],
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({ template: 'source/index.html' }),
  ],
  devServer: {
    historyApiFallback: true
  }
};
