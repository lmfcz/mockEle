<template>
  <div class="delimiter">
    <div class="line"></div>
    <div class="text">{{info}}</div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: String,
      default: '欢迎光临'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .delimiter
    display flex
    .line
      position relative
      flex 1
      top -6px
      border-bottom 1px solid rgba(255, 255, 255, 0.2)
    .text
      padding 0 12px 0 12px
      font-weight bold
      font-size 14px
</style>
