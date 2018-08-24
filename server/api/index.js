const express = require('express')
const axios = require('axios')
const app = express()
const router = express.Router()
const config = require('../../config')
const signApi = require('./signApi')
const API_URL = `http://${config.hostname_test}:${config.port_test}${config.path}`

const LogHandle = require('../../lib/LogHandle')
const routerLog = LogHandle.getLogger('router')

router.all('*', async (req, res) => {
  const apiName = req.path.slice(1)
  const method = req.method
  
  if (req.query.encode) { // encode 为保留请求的字段 表示为json格式的数据 服务器进行转义
    req.serverParams = Object.assign(JSON.parse(req.query.encode), req.serverParams)
    delete req.query.encode
  }
  const params = Object.assign({}, req.query, req.body, req.serverParams)
  
  const accessToken = (req.userInfo && req.userInfo.accessToken) || ''

  const sysPara = signApi.sysParam(apiName, params, accessToken)
  
  const logStr = 'method:' + method +
    '\t' + apiName +
    '\n\t' + 'bizParam:' + JSON.stringify(params) +
    '\n\t' + 'sysPara:' + sysPara

  function write(str, method = 'log') {
    console[method](str)
    routerLog.info(write)
  }
  
  try {
    const requestParam = {
      method,
      url: API_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      transformRequest: [function (data) {
        let ret = ''
        function enCodeParam(p) {
          if (typeof p === 'object') {
            return encodeURIComponent(JSON.stringify(p))
          }
          return encodeURIComponent(p)
        }
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + enCodeParam(data[it]) + '&'
        }
        return ret
      }],
      [method.toLowerCase() === 'get' ? 'params' : 'data']: {
        bizParam: encodeURIComponent(JSON.stringify(params)),
        sysParam: sysPara,
      }
    }
    const result = await axios(requestParam)
    console.log(result.data)
    write(logStr + '\n\tresult:' + JSON.stringify(result.data))
    if (req.dataCB) {
      await req.dataCB({ req, res, result })
    }
    res.send(result.data)
  } catch (e) {
    write(logStr + '\n\terror:' + e.toString(), 'error')
    res.send(e)
  }

})


app.use('/', router)
module.exports = app