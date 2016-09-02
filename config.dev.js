var path = require('path');
var webpack = require('webpack');

module.exports = {
  server: {
    port: 3000,
    address: 'localhost'
  },
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [],
  module: {
    loaders: [{
      test: /\,js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
}
