import Vue from 'vue';
import Vuex from 'vuex';
import persistedState from 'vuex-persistedstate';

import user from './modules/user';
import tabBar from './modules/tab-bar';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    tabBar
  },
  getters,
  plugins: [
    persistedState({
      storage: {
        getItem: key => uni.getStorageSync(key),
        setItem: (key, value) => uni.setStorageSync(key, value),
        removeItem: key => uni.removeStorageSync(key)
      }
    })
  ]
});

export default store;
