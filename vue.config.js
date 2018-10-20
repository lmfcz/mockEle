const { seller, goods, ratings } = require('./mock/data.json')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'common': '@/common',
        'components': '@/components',
        'router': '@/router'
      }
    },
    // mock数据
    devServer: {
      before (app) {
        app.get('/api/seller', (req, res) => {
          res.json({
            errno: 0,
            seller
          })
        })
        app.get('/api/goods', (req, res) => {
          res.json({
            errno: 0,
            goods
          })
        })
        app.get('/api/ratings', (req, res) => {
          res.json({
            errno: 0,
            ratings
          })
        })
      }
    }
  }
}
