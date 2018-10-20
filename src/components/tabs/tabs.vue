<template>
  <div class="tabs">
    <div class="tab-item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ratings">评价</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/seller">商家</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  .tabs
    width 100%
    display flex
    width 100%
    .tab-item
      flex 1
      height 40px
      line-height 40px
      font-size 14px
      text-align center
      color rgb(77, 85, 93)
      & > a
        display block
      .active
        color rgb(240, 20, 20)
</style>
