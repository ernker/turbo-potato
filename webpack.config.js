var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'app/build');
var APP_DIR = path.resolve(__dirname, 'app/src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          {  
            test: /\.js?/,
            include: APP_DIR,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
          }
      ]
  }
};

module.exports = config;