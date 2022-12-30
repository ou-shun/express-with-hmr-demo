const path = require('path');
const webpack = require('webpack');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    path.join(__dirname, 'app.jsx'),
    `webpack-hot-middleware/client?path=/__webpack_hmr&reload=true`,
  ],
  output: {
    publicPath: '/static/js/',
    filename: 'bundle.js'
  },
  watchOptions: { ignored: '/node_modules/' },
  resolve: { extensions: [ '.js','.jsx' ] },
  module: {
    rules: [ {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),  new ReactRefreshWebpackPlugin()]
};
