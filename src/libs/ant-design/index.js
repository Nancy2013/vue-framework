/*
 * @Description: 按需引用ant design vue组件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-07 17:10:38
 * @LastEditTime: 2019-07-23 15:41:08
 */
import Radio from 'ant-design-vue/lib/button';
import Switch from 'ant-design-vue/lib/switch';
import Tree from 'ant-design-vue/lib/tree';
import Icon from 'ant-design-vue/lib/icon';

export default (Vue) => {
  Vue.use(Radio);
  Vue.use(Switch);
  Vue.use(Tree);
  Vue.use(Icon);
};
