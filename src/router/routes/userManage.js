const userManage = {
  // 设备管理
  path: 'userManage',
  name: '人员管理',
  show: true,
  component: () => import('viewsPath/userManage/index.vue'),
};

export default [userManage];
