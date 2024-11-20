import { fetchLogin } from '@/api/user';

const state = {
  token: null
};

const mutations = {
  // 存储Token
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  // 移除Token
  REMOVE_TOKEN: state => {
    state.token = null;
  }
};

const actions = {
  /* 登录 */
  async login({ commit }, userInfo) {
    await fetchLogin(userInfo);
  },
  /** 登出 */
  loginOut({ commit }) {
    commit('REMOVE_TOKEN');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
