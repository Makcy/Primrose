const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const ENTRY_PATH = path.resolve(ROOT_PATH, 'app');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  mode: 'development',
  entry: path.resolve(ENTRY_PATH, 'index.js'),
  devtool: 'inline-source-map',
  output: {
    path: OUTPUT_PATH,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      options: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react', 'stage-2'],
      },
    },
    {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: { sourceMap: true, modules: true, localIdentName: '[name]__[local]___[hash:base64:5]' } },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: { sourceMap: true, modules: true, localIdentName: '[name]__[local]___[hash:base64:5]' } },
        { loader: 'sass-loader', options: { sourceMap: true } },
      ],
    },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Primorse Demo',
      showErrors: true,
    }),
  ],
};
