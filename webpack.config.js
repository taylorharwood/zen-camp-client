const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        GRAPH_QL_SERVER_URL: JSON.stringify(process.env.GRAPH_QL_SERVER_URL)
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Zen Camp',
      template: 'views/index.ejs',
      filename: 'index.html',
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    })
  ]
};