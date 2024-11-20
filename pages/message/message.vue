<template>
  <view class="layout">
    <z-paging ref="paging" v-model="list" @query="queryList">
      <template #top>
        <custom-nav-bar />
      </template>
      <view class="item" v-for="item of list" :key="item.id">
        {{ item.title }}
      </view>
      <template #bottom>
        <custom-tab-bar />
      </template>
    </z-paging>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    queryList(pageNo, pageSize) {
      // 模拟数据请求的接口
      uni
        .request({
          url: 'https://tea.qingnian8.com/api/qingnews/newslist',
          data: {
            num: pageSize,
            page: pageNo
          }
        })
        .then(res => {
          this.$refs.paging.complete(res.data.data);
        })
        .catch(err => {
          this.$refs.paging.complete(false);
        });
    }
  },
  onShow() {}
};
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  .item {
    padding: 60rpx 30rpx;
    border-top: 1px solid #eee;
  }
}
</style>
