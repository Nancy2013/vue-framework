const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfigFn = require('./webpack.dev.config');
const { build } = require('../w-config');

const { buildRoot } = build;

module.exports = () =>
  devConfigFn({ server: true }).then(config =>
    merge(config, {
      plugins: [new webpack.HotModuleReplacementPlugin()],
      devServer: {
        contentBase: resolve(buildRoot, '..'),
        hot: true,
        noInfo: true,
        stats: 'errors-only',
        open: true,
        openPage: `${build.extraPath}/index.html`,
        proxy: [
          {
            context: ['/auxdemo'], // 路径前缀
            target: 'http://101.124.2.39', // 服务器ip
            changeOrigin: true,
            logLevel: 'debug',
          },
        ],
      },
}));
