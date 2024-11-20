/** 获取默认底部导航栏列表 */
const getDefaultTabBarList = () => {
  return [
    {
      /** tabBar显示的文字 */
      text: '首页',
      /** 是否显示小红点 */
      isDot: false,
      /** 显示的徽标数字 */
      badge: null,
      /** 图标路径 */
      icon: null,
      /* 对应的页面路径 */
      pagePath: '/pages/index/index',
      name: 'index'
    },
    {
      /** tabBar显示的文字 */
      text: '消息',
      /** 是否显示小红点 */
      isDot: false,
      /** 显示的徽标数字 */
      badge: null,
      /** 图标路径 */
      icon: null,
      /* 对应的页面路径 */
      pagePath: '/pages/message/message',
      name: 'message'
    },
    {
      /** tabBar显示的文字 */
      text: '我的',
      /** 是否显示小红点 */
      isDot: false,
      /** 显示的徽标数字 */
      badge: null,
      /** 图标路径 */
      icon: null,
      /* 对应的页面路径 */
      pagePath: '/pages/mine/mine',
      name: 'mine'
    }
  ];
};

const state = {
  /** 当前选中底部导航栏索引 */
  tabbarIndex: 0,
  /** 底部导航栏列表 */
  tabBarList: getDefaultTabBarList()
};

const mutations = {
  // 重置底部导航栏列表
  RESET_TAB_BAR_LIST: state => {
    state.tabBarList = getDefaultTabBarList();
  },
  // 设置当前选中底部导航栏索引
  SET_TAB_BAR_INDEX: (state, value) => {
    state.tabbarIndex = value;
  }
};

const actions = {
  // 重置底部导航栏列表
  resetTabBarList({ commit }) {
    commit('RESET_TAB_BAR_LIST');
  },
  // 设置当前选中底部导航栏索引
  setTabBarIndex({ commit }, value) {
    commit('SET_TAB_BAR_INDEX', value);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
