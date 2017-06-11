var path = require('path');

module.exports = {
  entry: './src/javascripts/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'public/'
  }
}
