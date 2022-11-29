const path = require('path');

const extraPath = 'web';
const publicPath = '';
const distRoot = path.resolve(__dirname, '../dist');
module.exports = {
  build: {
    env: 'production',
    distRoot,
    buildRoot: path.resolve(distRoot, extraPath),
    extraPath,
    browserslist: ['>= 5%', 'last 2 versions', 'ie >=9'],
    vueModule: 'vue/dist/vue.esm.js',
    publicPath: !publicPath && !extraPath ? '' : `${publicPath}${extraPath ? '/' : ''}${extraPath}`,
  },
  dev: {
    env: 'development',
  },
};
