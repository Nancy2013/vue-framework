/*
 * @Description: 将ant-design-vue组件定义为全局插件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-08 14:50:58
 * @LastEditTime: 2019-05-10 11:17:29
 */
import message from 'ant-design-vue/lib/message';

export default {
  install(Vue) {
    Vue.prototype.$message = message;
  },
};
