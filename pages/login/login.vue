<template>
  <view class="container">
    <custom-nav-bar />
    <view class="content"> 登录页面 </view>
    <custom-tab-bar />
  </view>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  & > .content {
    flex: 1;
  }
}
</style>
