<template>
  <div id="app">
    <v-header></v-header>
    <v-tabs></v-tabs>
    <router-view/>
  </div>
</template>

<script>
import VHeader from 'components/header/header'
import VTabs from 'components/tabs/tabs'
export default {
  components: {
    VHeader,
    VTabs
  }
}
</script>

<style lang="stylus">
</style>
