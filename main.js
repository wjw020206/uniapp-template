import App from './App';

// #ifndef VUE3
import Vue from 'vue';
import store from './store';
import { router, RouterMount } from './router';
import './uni.promisify.adaptor';
import uView from '@/uni_modules/uview-ui';

// 引入uView
Vue.use(uView);

// 引入路由
Vue.use(router);

// 挂载Vuex
Vue.prototype.$store = store;

// 修改uView内置配置方案
uni.$u.setConfig({
  // 修改$u.config对象的属性
  config: {
    // 修改默认单位为rpx
    unit: 'rpx'
  }
});

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue({
  store,
  ...App
});

// 引入网络请求封装
require('./utils/request.js')(app);

// #ifdef H5
RouterMount(app, router, '#app');
// #endif

// #ifndef H5
app.$mount();
// #endif

// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue';

export function createApp() {
  const app = createSSRApp(App);
  return {
    app
  };
}
// #endif
