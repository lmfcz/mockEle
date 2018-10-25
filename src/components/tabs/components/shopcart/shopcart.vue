<template>
  <div class="shop-cart">
    <div class="left">
      <span class="shop-cart-icon">
        <i class="icon-shopping_cart" :class="{'high-light':totalCount>0}"></i>
        <span class="tips">{{totalCount}}</span>
      </span>
      <span class="price" :class="{'high-light':totalPrice>0}">
        ￥{{totalPrice}}
      </span>
      <span class="tips">
        另需配送费{{seller.deliveryPrice}}元
      </span>
    </div>
    <div class="right" :class="payClass">{{payDesc}}</div>
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
</style>
