<template>
  <u-tabbar :value="tabbarIndex" v-if="isShowTabBar">
    <u-tabbar-item
      :text="tabBarItem.text"
      :icon="tabBarItem.icon"
      @click="goToPage(tabBarItem.name, index)"
      :badge="tabBarItem.badge"
      :dot="tabBarItem.isDot"
      v-for="(tabBarItem, index) of tabBarList"
      :key="index"
    />
  </u-tabbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'custom-tab-bar',
  data() {
    return {};
  },
  computed: {
    ...mapState('tabBar', ['tabBarList', 'tabbarIndex']),
    /** 是否显示底部导航栏 */
    isShowTabBar() {
      return this.tabBarList.some(item => item.name === this.$Route.name);
    }
  },
  methods: {
    /** 底部导航栏菜单点击回调
     * @param {string} name 页面名称
     * @param {number} index 页面下标
     */
    goToPage(name, index) {
      this.$Router.replaceAll({ name });
      this.$store.dispatch('tabBar/setTabBarIndex', index);
    }
  }
};
</script>

<style lang="scss" scoped></style>
