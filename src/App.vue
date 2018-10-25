<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <v-tabs></v-tabs>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import VHeader from 'components/header/header'
import VTabs from 'components/tabs/tabs'
import axios from 'axios'
export default {
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this._getHeaderData()
  },
  methods: {
    _getHeaderData () {
      axios
        .get('/api/seller')
        .then(res => {
          let data = res.data
          if (data.errno === 0) {
            this.seller = data.seller
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  components: {
    VHeader,
    VTabs
  }
}
</script>

<style lang="stylus">
</style>
