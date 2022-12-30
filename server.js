const path = require('path');

const express = require('express');
const app = express();

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackCompiler = webpack(webpackConfig);
const PORT = 3000;

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));

const HTML = `<!DOCTYPE html>
<html>
  <head><meta charset="utf-8" /><title>Express With HMR</title></head>
  <body>
    <div id="app" />
    <script src="/static/js/bundle.js"></script>
  </body>
</html>
`;

app.use('/', (_, res) => {
  res.end(HTML);
});

app.listen(PORT, () => { console.log(`The server is listening on port ${PORT}.`); });
