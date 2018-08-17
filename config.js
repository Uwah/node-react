/**
 * config 配置文件
 */

const path = require('path')
let env = process.env.NODE_ENV || 'development'
env = env.toLowerCase()

const file = path.resolve(__dirname, 'config', env)
try {
  if(env === 'production') {
    var config = require('./config/production')
  } else if(env === 'beta') {
    var config = require('./config/beta')
  } else {
    var config = require('./config/development')
  }  
} catch(err) {
  console.error('加载配置配置文件报错...' + err)
  throw err
}

module.exports = config
