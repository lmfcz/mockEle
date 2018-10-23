<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul v-if="goods.length">
        <li class="menu-item"
            v-for="(good, index) of goods"
            :class="{current: index === currentIndex}"
            :key="good.name"
        >
          <span class="text">
            <span class="icon"
                  v-if="good.type>0"
                  :class="classMap[good.type]"
            ></span>{{good.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="item-wrapper">
      <ul v-if="goods.length">
        <li class="section" v-for="item of goods" :key="item.name">
          <div class="section-title">{{item.name}}</div>
          <ul>
            <li class="item" v-for="food of item.foods" :key="food.name">
              <span class="avatar">
                <img class="img" :src="food.image" :alt="food.name">
              </span>
              <div class="info">
                <div class="item-name">{{food.name}}</div>
                <div class="desc">{{food.description}}</div>
                <div class="sell-info">
                  <span class="sell">月售{{food.sellCount}}份</span>
                  <span class="rating">好评率{{food.rating}}%</span>
                </div>
                <div class="sale-price">
                  <span class="current-price">{{food.price}}</span>
                  <span class="old-price" v-if="food.oldPrice!=''">{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="short-cart">
      this is short cart
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      goods: [],
      currentIndex: 2
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    setTimeout(() => {
      this._getGoods()
    }, 20)
  },
  methods: {
    _getGoods () {
      axios
        .get('api/goods')
        .then(res => {
          let data = res.data
          if (data.errno === 0) {
            this.goods = data.goods
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/mixin.styl'
  .goods
    display flex
    position absolute
    width 100%
    top 174px
    bottom 46px
    left 0
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background-color #f3f5f7
      .menu-item
        position relative
        display table
        width 56px
        height 54px
        padding 0 12px
        overflow hidden
        &.current
          top -1px
          background-color #fff
          z-index 99
          .text
            font-weight bold
            border-none()
        .text
          display table-cell
          vertical-align middle
          box-sizing border-box
          font-size 12px
          font-weight 200
          line-height 14px
          color #07111b
          border-1px(rgba(7, 17, 27, .1))
          .icon
            display inline-block
            width 12px
            height 12px
            margin-right 2px
            vertical-align top
            background-size 12px 12px
            background-repeat no-repeat
            &.decrease
              bg-image('decrease_3')
            &.discount
              bg-image('discount_3')
            &.guarantee
              bg-image('guarantee_3')
            &.invoice
              bg-image('invoice_3')
            &.special
              bg-image('special_3')
    .item-wrapper
      width 100%
      .section
        .section-title
          height 26px
          line-height 26px
          padding-left 14px
          background-color #f3f5f7
          border-left 2px solid #d9dde1
          font-size 12px
          color rgb(147, 153, 159)
        .item
          display flex
          margin 0 18px
          padding 18px 0
          border-1px(rgba(7, 17, 27, .1))
          &:last-child
            border-none()
          .avatar
            display inline-block
            width 57px
            height 57px
            margin-right 10px
            background-color red
            .img
              width 57px
              height 57px
          .info
            display flex
            flex-direction column
            justify-content center
            padding-top 2px
            flex 1
            .item-name
              line-height 14px
              font-size 14px
              color rgb(7, 17, 27)
            .desc
              margin 8px 0
              font-size 10px
              color rgb(147, 153, 159)
            .sell-info
              font-size 10px
              color rgb(147, 153, 159)
              .sell
                margin-right 7px
            .sale-price
              .current-price
                margin-right 12px
                line-height 24px
                font-size 14px
                color #f01414
                font-weight 700
              .old-price
                line-height 24px
                font-size 10px
                color rgb(147, 153, 159)
                font-weight 700
                text-decoration line-through
    .short-cart
      position fixed
      width 100%
      height 46px
      left 0
      bottom 0
      z-index 100
      background-color #141d27
</style>
