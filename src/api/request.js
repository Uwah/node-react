import axios from 'axios'
import { message } from 'antd'

axios.defaults.headers['Request-With'] = 'xhr'
// 请求拦截
axios.interceptors.request.use(config => {
  if(config.params) {
    const encodeParam = {}
    Object.keys(config.params).forEach(key => {
      const p = config.params[key]
      // if(typeof p === 'object') {
      if(Object.prototype.toString.call(p) === '[object Object]') {
        encodeParam[key] = p
        delete config.params[key]
      }
    })
    config.params.encode = encodeParam
  }
  return config
})

//响应拦截
axios.interceptors.response.use(res => {
  if(!res.data.success) {
    message.error(`请求失败：${res.data.msg}`, 3)
    if(res.data.code === '401') { //未登录

    }
    res.getData = () => Promise.reject(res.data)
  } else {
    res.getData = () => Promise.resolve(res.data)
  }

  return res
})

module.exports = axios