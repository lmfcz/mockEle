import Router from 'vue-router'
import routes from './routes/routes'

export default () => {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
  })
}
