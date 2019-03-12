const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    index: './src/Hanjst.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Hanjst.mini.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin({
      sourceMap: false
    })],
  },
}