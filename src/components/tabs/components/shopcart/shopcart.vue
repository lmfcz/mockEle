<template>
  <div class="shop-cart">
    <div class="left">
      <span class="shop-cart-icon">
        <i class="icon-shopping_cart" :class="{'high-light':totalCount>0}"></i>
        <span class="tips" v-show="totalCount>0">{{totalCount}}</span>
      </span>
      <span class="price" :class="{'high-light':totalPrice>0}">
        ￥{{totalPrice}}
      </span>
      <span class="tips">
        另需配送费{{seller.deliveryPrice}}元
      </span>
    </div>
    <div class="right" :class="payClass">{{payDesc}}</div>
    <div class="ball-container">
      <div v-for="(ball, index) in balls" :key="index">
        <transition
          name="drop"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
        >
          <div class="ball" v-show="ball.show">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    },
    selectFoods: {
      type: Array,
      default () {
        return [
          {
            price: 10,
            count: 1
          }
        ]
      }
    }
  },
  data () {
    return {
      balls: [{
        show: false
      }, {
        show: false
      }, {
        show: false
      }, {
        show: false
      }, {
        show: false
      }],
      dropBalls: []
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectFoods.forEach(food => {
        total += food.price * food.count
      })
      return total
    },
    totalCount () {
      let count = 0
      this.selectFoods.forEach(food => {
        count += food.count
      })
      return count
    },
    payDesc () {
      if (this.totalPrice === 0) {
        return `还差${this.seller.minPrice}起送`
      } else if (this.totalPrice < this.seller.minPrice) {
        let diff = this.seller.minPrice - this.totalPrice
        return `还差${diff}元起送`
      } else {
        return '去结算'
      }
    },
    payClass () {
      if (this.totalPrice < this.seller.minPrice) {
        return 'not-enough'
      } else {
        return 'enough'
      }
    }
  },
  methods: {
    drop (el) {
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          ball.el = el
          this.dropBalls.push(ball)
          return
        }
      }
    },
    beforeEnter (el) {
      let count = this.balls.length
      while (count--) {
        let ball = this.balls[count]
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect()
          let x = rect.left - 32
          let y = -(window.innerHeight - rect.top - 22)
          el.style.display = ''
          el.style.transform = `translate3d(0, ${y}px, 0)`
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.transform = `translate3d(${x}px, 0, 0)`
        }
      }
    },
    enter (el, done) {
      /* eslint-disable no-unused-vars */
      let rf = el.offsetHeight
      this.$nextTick(() => {
        el.style.webkitTransform = 'translate3d(0,0,0)'
        el.style.transform = 'translate3d(0,0,0)'
        let inner = el.getElementsByClassName('inner-hook')[0]
        inner.style.webkitTransform = 'translate3d(0,0,0)'
        inner.style.transform = 'translate3d(0,0,0)'
        el.addEventListener('transitionend', done)
      })
    },
    afterEnter (el) {
      let ball = this.dropBalls.shift()
      if (ball) {
        ball.show = false
        el.style.display = 'none'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .shop-cart
    position fixed
    display flex
    bottom 0
    left 0
    width 100%
    height 46px
    z-index 50
    background-color #141d27
    .left
      flex 1
      font-size 0
      .shop-cart-icon
        position relative
        display inline-block
        left 18px
        top -12px
        width 58px
        height 58px
        padding 6px
        margin-right 18px
        box-sizing border-box
        border-radius 50%
        background-color #141d27
        text-align center
        .icon-shopping_cart
          display inline-block
          width 44px
          height 44px
          line-height 44px
          border-radius 50%
          background-color #2b343c
          font-size 24px
          color #80858a
          &.high-light
            color #fff
            background-color rgb(0, 160, 220)
        .tips
          position absolute
          top 0
          left 20px
          padding 0 6px
          width 24px
          line-height 16px
          vertical-align top
          text-align center
          box-sizing border-box
          border-radius 8px
          background-color red
          font-size 9px
          color #fff
      .price
        display inline-block
        height 24px
        margin-top 12px
        padding-right 12px
        line-height 24px
        vertical-align top
        font-size 16px
        color #919396
        font-weight 700
        border-right 2px solid rgba(255, 255, 255, .1)
        &.high-light
          color #fff
      .tips
        display inline-block
        heigt 24px
        margin-left 12px
        padding 12px 0
        line-height 24px
        font-size 14px
        vertical-align top
        color rgba(255, 255, 255, .4)
    .right
      flex 0 0 105px
      width 105px
      line-height 48px
      font-size 12px
      font-weight 700
      text-align center
      color rgba(255, 255, 255, .4)
      &.not-enough
        background-color #2b333b
      &.enough
        background-color #00b43c
        color #fff
    .ball-container
      .ball
        position fixed
        left 32px
        bottom 22px
        z-index 150
        transition all .4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width 16px
          height 16px
          border-radius 50%
          background rgb(0, 160, 220)
          transition all .4s linear
</style>
