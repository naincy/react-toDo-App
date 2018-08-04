const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html/, exclude: /node_modules/, loader: 'raw-loader' },
      { test: /\.css$/, exclude: /node_modules/,
        use: [ { loader: 'style-loader' },
            { loader: 'css-loader' },
          ],
      },
    ],
   },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  mode: 'development'
};
