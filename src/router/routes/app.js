const app = {
  // 设备管理
  path: '/login',
  name: '设备登录管理',
  show: true,
  component: () => import('viewsPath/login/index.vue'),
};

export default [app];
