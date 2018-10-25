<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 3
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array
    }
  },
  mounted () {
    this.timer = setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  },
  methods: {
    _initScroll () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
      this.scroll.on('scroll', (pos) => {
        this.$emit('scroll', pos)
      })
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>
