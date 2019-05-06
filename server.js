/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

const app = express();

const isProd = process.env.NODE_ENV === 'production';
const complier = isProd ? webpack(prodConfig) : webpack(devConfig);

app.use('/', express.static(path.join(__dirname, 'build')));
app.use('/', express.static(path.join(__dirname, 'static')));
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'index.html'));
// });

console.log(`Current Environment -  ${process.env.NODE_ENV}`);
if (!isProd) {
  app.use(webpackDevMiddleware(complier, {
    publicPath: devConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(complier));
}


app.listen(3000, () => {
  console.log('Server Start: http://localhost:3000');
});
