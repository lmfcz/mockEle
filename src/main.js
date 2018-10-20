import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import createRouter from 'router/router'

import '../static/style/reset.css'

Vue.use(VueRouter)

const router = createRouter()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
