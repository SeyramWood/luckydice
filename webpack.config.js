const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'app', '/js/src/index'),
  output: {
    path: path.join(__dirname, 'app/js/dist'),
    publicPath: 'app/js/dist/',
    filename: "luckydice.min.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/env"]
        ]
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    publicPath: '/js/dist',
    inline: true,
    host: 'localhost',
    port: 8080,
  }
};