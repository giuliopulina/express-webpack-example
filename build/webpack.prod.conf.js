const base = require('./webpack.base.conf');
const webpack = require('webpack')
const resolve = require('path').resolve
const Dotenv = require('dotenv-webpack');

base.mode = 'production';
base.plugins = [
  new webpack.ContextReplacementPlugin(
    /express\/lib/,
    resolve(__dirname, '../node_modules'),
    {
      'ejs': 'ejs'
    }
  ),
  new Dotenv()
]
base.stats = {
  warningsFilter: /require\.extensions/
}

module.exports = base;
