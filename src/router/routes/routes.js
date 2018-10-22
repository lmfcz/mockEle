import Goods from 'components/tabs/goods/goods'
import Seller from 'components/tabs/seller/seller'
import Ratings from 'components/tabs/ratings/ratings'

export default [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/seller',
    component: Seller
  },
  {
    path: '/ratings',
    component: Ratings
  }
]
