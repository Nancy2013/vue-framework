import service from 'servicePath/index';

const { appAsk } = service;
const app = {
  namespaced: true,
  state: {
    userInfo: {},
  },

  mutations: {
    setUserLogin(state, payload) {
      state.userInfo = payload;
    },
  },

  getters: {
    formatUserInfo: state => `${state.userInfo.userName}-${state.userInfo.passwd}`,
  },

  actions: {
    async setUserLogin({ commit }, params) {
      const { resCode } = await appAsk.addLoginUser(params);
      if (resCode === 0) {
        commit('setUserLogin', params);
      }
    },
  },
};

export default app;
