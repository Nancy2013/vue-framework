/**
 *  @module app
 *  @requires vue
 *  @requires vuex-router-sync
 *  @requires store/index
 *  @requires router/index
 */
import 'stylesPath/css';
import 'babel-polyfill';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import router from 'routerPath/index';
import I18n from 'vue-i18n';
import store from 'storePath/index';
import App from 'viewsPath/App.vue';
import VueJsonp from 'vue-jsonp';
import EN from './locale/en_US';
import libs from './libs';
import plugins from './plugins';


Vue.use(VueJsonp);

libs(Vue);
plugins(Vue);
Vue.use(I18n);

const i18n = new I18n({
  locale: EN.locale,
  messages: { [EN.locale]: EN },
});

// 使用vuex管理 router状态
// 会在store上注册 `store.state.route`
sync(store, router);

new Vue({
  i18n,
  store,
  router,
  ...App,
}).$mount('#app');
