import Vue from 'vue';
import Router from 'vue-router';
import Main from 'viewsPath/common/Main.vue';

const context = require.context('./routes', false, /^\.\/(?!index)[^/]*\.js$/);

const childrenRoutes = context.keys().reduce((rs, key) => {
  rs.push(...context(key).default);
  return rs;
}, []);

Vue.use(Router);

export const routes = [
  {
    path: '/',
    component: Main,
    name: 'main',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        menuShow: true,
        component: () => import('viewsPath/home/index.vue'),
        redirect: '/home/deviceManage',
        children: childrenRoutes,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    menuShow: true,
    component: () => import('viewsPath/login/index.vue'),
  },
  {
    path: '*',
    component: () => import('viewsPath/Error404/index.vue'),
  },
];
const router = new Router({
  routes,
});
export default router;
