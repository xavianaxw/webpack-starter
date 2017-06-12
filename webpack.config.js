const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin({
  // filename: "[name].[contenthash].css",
  filename: "bundle.css",
  // disable: process.env.NODE_ENV === "development"
});

console.log(process.env.NODE_ENV);

module.exports = {
  entry: './src/javascripts/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'public/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractCss.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      }
    ]
  },
  plugins: [
    extractCss,
  ],
}
