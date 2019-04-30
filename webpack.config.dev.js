const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react', 'stage-2'],
      },
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    },
    ],
  },
  plugins: [],
};
