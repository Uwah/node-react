const path = require('path')
const express = require('express')
const router = express.Router()
const app = express()


const env = process.env.NODE_ENV || 'development'

if(env === 'development') {
  const webpack = require('webpack')
  const webpackConfig = require('../build/webpack.dev.conf')
  const compiler = webpack(webpackConfig)
  const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: false,
    noInfo: false,
    logLevel: 'error', //表示仅输出错误的日志
    stats: {
      chunks: false,
      colors: true
    }
  })

  const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log() {
      // console.log('hmr log')
    }
  })
  // compiler.plugin('compilation', (compilation) => {
  //   compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
  //     hotMiddleware.publish({ action: 'reload'})
  //     cb()
  //   }) v                                     
  // })

  app.use(devMiddleware)
  app.use(hotMiddleware)

}

router.get('*', (req, res, next) => {
  if(/\.(js|css)/.test(req.url)) {
    next()
    return 
  }
  res.render('reactSSR')
})

app.use('/', router)

module.exports = app