<template>
  <u-navbar :title="getPageTitle" :placeholder="true" leftIcon="">
    <!-- 左侧返回图标 -->
    <template #left>
      <button
        class="u-reset-button"
        @tap="$u.throttle(goBackHandle)"
        v-if="isShowBack"
      >
        <u-icon name="arrow-left" />
      </button>
    </template>
  </u-navbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'custom-navbar',
  data() {
    return {};
  },
  computed: {
    ...mapState('tabBar', ['tabBarList', 'tabbarIndex']),
    /* 是否显示返回上一页按钮 */
    isShowBack() {
      const pages = getCurrentPages();
      return pages.length > 1;
    },
    getPageTitle() {
      return this.$Route.meta.title;
    }
  },
  methods: {
    goBackHandle() {
      this.$Router.back(1);
    }
  }
};
</script>

<style lang="scss" scoped></style>
