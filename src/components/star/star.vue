<template>
  <div class="stars" :class="starType">
    <span v-for="(classname, index) of classTypes"
          class="star"
          :class="classname"
          :key="index"
    >
    </span>
  </div>
</template>

<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'
export default {
  props: {
    size: {
      type: Number,
      default: 24
    },
    score: {
      type: Number,
      default: 3
    }
  },
  computed: {
    starType () {
      return `star-${this.size}`
    },
    classTypes () {
      let arr = []
      let score = Math.floor(this.score * 2) / 2
      let hasDecimal = score % 1 !== 0
      let integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        arr.push(CLS_ON)
      }
      if (hasDecimal) {
        arr.push(CLS_HALF)
      }
      while (arr.length < LENGTH) {
        arr.push(CLS_OFF)
      }
      return arr
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/mixin.styl'
  .stars
    font-size 0
    height 100%
    .star
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star
        width: 20px
        height: 20px
        margin-right: 22px
        background-size: 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    &.star-36
      .star
        width: 15px
        height: 15px
        margin-right: 6px
        background-size: 15px 15px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    &.star-24
      .star
        width: 10px
        height: 10px
        margin-right: 3px
        background-size: 10px 10px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
</style>
