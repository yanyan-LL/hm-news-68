<template>
  <div class="nav-item" @click="clickFn">
      <div class="title"><slot></slot></div>
      <div class="content"><slot name="content"></slot></div>
      <div class="arrow">
          <span class="iconfont iconjiantou1"></span>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickFn () {
      if (this.to) {
        this.$router.push(this.to)
      }
    }
  },
  props: {
    to: String
  }
}
</script>

<style lang="less" scoped>
.nav-item {
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    margin-left: 10px;
    padding-right: 10px;
    .content {
        flex: 1;
        text-align: right;
        color: #999;
    }
    .arrow {
        padding-left: 8px;
    }
}
</style>
