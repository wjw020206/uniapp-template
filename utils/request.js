module.exports = vm => {
  // 初始化请求配置
  uni.$u.http.setConfig(config => {
    // 网络请求后台地址
    config.baseURL = 'https://api.example.com';
    return config;
  });

  // 请求拦截器
  uni.$u.http.interceptors.request.use(
    config => {
      // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
      config.data = config.data || {};
      if (config?.custom?.auth) {
        config.header.token = vm.$store.state.userInfo.token;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // 响应拦截器
  uni.$u.http.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );
};
