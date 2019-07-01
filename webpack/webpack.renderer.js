'use strict';

const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    target: 'electron-renderer',
    entry: './src/renderer.jsx',
    output: {
      filename: 'renderer.js',
      path: process.cwd() + (env.production ? '/app/' : '/build/')
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx'],
      mainFields: ['webpack', 'browser', 'main']
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader'
        },
        {
          test: /\.yml$/,
          loader: 'yml-loader'
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg|jpeg|pdf|ttf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
              }
            }
          ]
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: "html-loader"
            },
            {
              loader: "markdown-loader",
              options: {
              }
            }
          ]
        }
      ]
    }
  };
};

