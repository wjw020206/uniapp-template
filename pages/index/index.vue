<template>
  <view class="flex flex-col h-full">
    <custom-nav-bar />
    <view class="bg-red flex-1"></view>
    <button @click="clickHandle">前往登录页面</button>
    <custom-tab-bar />
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickHandle() {
      this.$Router.push({ name: 'login' });
    }
  },
  /* 下拉刷新 */
  onPullDownRefresh() {
    uni.stopPullDownRefresh();
  }
};
</script>

<style lang="scss"></style>
