<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="info">
        <p class="top">
          <span class="brand"></span>
          <span class="title">{{seller.name}}</span>
        </p>
        <p class="middle">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </p>
        <p v-if="seller.supports" class="bottom">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="desc">{{seller.supports[0].description}}</span>
        </p>
      </div>
      <div class="support-count" v-if="seller.supports" @click="handleClick">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="icon"></span>
      <span class="text" :title="seller.bulletin">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right" @click="handleClick"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <fade>
      <div class="detail" v-show="showDetail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="title">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="delimeter-wrapper">
              <delimiter info="优惠信息"></delimiter>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item"
                  v-for="support in seller.supports"
                  :key="support.type"
              >
                <span class="icon" :class="classMap[support.type]"></span>
                <span class="text">{{support.description}}</span>
              </li>
            </ul>
            <div class="delimeter-wrapper">
              <delimiter info="商家公告"></delimiter>
            </div>
            <div class="notice-wrapper">
              <p class="notice">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="handleClick">
          <i class="icon-close"></i>
        </div>
      </div>
    </fade>
  </div>
</template>

<script>
import Star from 'components/star/star'
import Delimiter from 'components/delimiter/delimiter'
import Fade from 'components/fade/fade'
export default {
  props: {
    seller: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      showDetail: false
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    handleClick () {
      this.showDetail = !this.showDetail
    }
  },
  components: {
    Star,
    Delimiter,
    Fade
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/mixin.styl'
  .header
    position relative
    height 134px
    background-color rgba(7, 17, 27, .3)
    overflow hidden
    color #fff
    .content-wrapper
      position relative
      padding 24px 0 18px 24px
      .avatar
        display inline-block
        width 64px
        height 64px
        vertical-align top
        border-radius 4px
        overflow hidden
        img
          width 100%
          height 100%
      .info
        display inline-block
        margin-left 16px
        .top
          font-size 0
          .brand
            display inline-block
            width 30px
            height 18px
            vertical-align top
            bg-image('brand')
            background-size  30px 18px
            background-repeat no-repeat
          .title
            line-height 18px
            margin-left 6px
            font-size 16px
            font-weight bold
        .middle
          margin-top 8px
          line-height 12px
          font-size 12px
        .bottom
          margin-top 10px
          .icon
            display inline-block
            vertical-align top
            width 14px
            height 14px
            margin-right 4px
            font-size 0
            background-size 14px 14px
            background-repeat no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .desc
            vertical-align top
            font-size 10px
            line-height 16px
      .support-count
        position absolute
        right 12px
        bottom 14px
        padding 7px 14px
        background-color rgba(0, 0, 0, .2)
        font-size 0
        border-radius 12px
        box-sizing border-box
        .count
          line-height 12px
          color: #fff
          font-weight: 200
          font-size: 12px
          vertical-align top
        .icon-keyboard_arrow_right
          padding-left: 2px
          font-size: 12px
    .bulletin-wrapper
      position relative
      bottom 0
      left 0
      height 28px
      line-height 28px
      padding 0 22px 0 12px
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      background-color rgba(7, 17, 27, .2)
      .icon
        display inline-block
        width 22px
        height 12px
        margin-top 7px
        vertical-align top
        bg-image('bulletin')
        background-size 22px 12px
        background-repeat no-repeat
      .text
        vertical-align top
        margin 0 4px
        font-size 10px
      .icon-keyboard_arrow_right
        position: absolute
        font-size: 10px
        right: 12px
        top: 8px
    .background
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index -1
      filter: blur(10px)
    .detail
      position fixed
      top 0
      left 0
      z-index 100
      width 100%
      height 100%
      backdrop-filter blur(10px)
      background-color rgba(7, 17, 27, .8)
      overflow auto
      .detail-wrapper
        width 100%
        min-height 100%
        .detail-main
          margin-top 64px
          padding-bottom 64px
          .title
            line-height 16px
            text-align center
            font-size 16px
            font-weight 700
          .star-wrapper
            height 24px
            line-height 24px
            margin-top 16px
            text-align center
          .delimeter-wrapper
            width 80%
            margin 28px auto 24px auto
          .supports
            width 80%
            margin 0 auto
            .support-item
              font-size 0
              margin-bottom 12px
              &:last-child
                margin-bottom 0
              .icon
                display inline-block
                vertical-align top
                width 16px
                height 16px
                margin-left 6px
                background-size 16px 16px
                background-repeat no-repeat
                &.decrease
                  bg-image('decrease_2')
                &.discount
                  bg-image('discount_2')
                &.special
                  bg-image('special_2')
                &.invoice
                  bg-image('invoice_2')
                &.guarantee
                  bg-image('guarantee_2')
              .text
                display inline-block
                margin-left 12px
                font-size 12px
                font-weight 200
                line-height 16px
          .notice-wrapper
            width 80%
            margin 0 auto
            .notice
              width 100%
              padding: 0 12px
              line-height: 24px
              font-size: 12px
      .detail-close
        position relative
        width 32px
        height 32px
        margin -64px auto 0 auto
        font-size 32px
        clear both
</style>
