'use strict';

const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Process = require('child_process');

function isCommand(command) {
  try {
    Process.execSync('which ' + command);
    return true;
  } catch (e) {
    return false;
  }
}

let alertCommand = '';

if (isCommand('afplay')) {
  alertCommand = 'afplay';
}

module.exports = function (env) {
  env = env || {};

  let plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env.production ? 'production' : 'development')
      },
      __DEVTOOLS__: !env.production
    })
  ];


  if (env.production) {
    plugins.push(
      new UglifyJsPlugin({
        uglifyOptions: {
          comments: false,
          compress: {
            warnings: false,
            dead_code: true,
            drop_debugger: true,
            unsafe: true,
            unused: true,
            drop_console: true,
            if_return: true,
            properties: true,
            comparisons: true,
            loops: true,
            join_vars: true
          }
        }
      })
    );
  } else if (alertCommand) {
    plugins.push({
      apply(compiler) {
        compiler.plugin('done', function () {
          setTimeout(() => Process.spawn(alertCommand, ['webpack/done.mp3']), 200);
        });
      }
    });
  }

  return {
    mode: env.production ? 'production' : 'development',
    target: 'electron-main',
    entry: './src/main.js',
    output: {
      filename: 'main.js',
      path: process.cwd() + (env.production ? '/app/' : '/build/')
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx'],
      mainFields: ['webpack', 'browser', 'main']
    },
    node: {
      __dirname: false,
      __filename: false
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader'
        }
      ]
    }
  };
};

