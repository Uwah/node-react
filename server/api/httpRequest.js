const http = require('http')
const config = require('../../config')
const signApi = require('./signApi')
// const API_URL = `http://${config.hostname_test}:${config.port_test}${config.path}`

const LogHandle = require('../../lib/LogHandle')
const routerLog = LogHandle.getLogger('router')

var errorJson = {"code":"111","data":null,"msg":"json parse exception","success":false};


const ajaxHandler = (method, apiName, req, bizParam, cb, headType = 'normal') => {
  method = method.toUpperCase()
  const accessToken = (req && req.session && req.session.userInfo && req.session.userInfo.accessToken) || '11'
  
  const sysPara = signApi.sysParam(apiName,bizParam,accessToken);
  const param = encodeURI('bizParam=' + encodeURIComponent(JSON.stringify(bizParam))+'&sysParam=' + sysPara);

  var path = config.path;

  routerLog.info('method:'+method+'\n\t'+'bizParam:'+JSON.stringify(bizParam)+'\n\t'+'sysPara:'+sysPara);
  console.log('---method:'+method);
  console.log('---bizParam:'+JSON.stringify(bizParam));
  console.log('---sysPara:'+sysPara);

  if(method == 'GET') {
    path += '?' + param;
  }
  const head = headType === 'normal' ? {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;',
    'enctype':'application/x-www-form-urlencoded',
    'accept-encoding': 'gzip',
    'Transfer-Encoding': 'chunked'
  } : {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;',
    'enctype':'application/x-www-form-urlencoded'
  }
  //hostname,port, path,method暂未动态
  const options = {
    hostname : config.hostname_test,
    port : config.port_test,
    path : path,
    method : method,
    headers: head 
  }

  const request = http.request(options, (res) => {
    res.setEncoding('utf-8')
    var data = ''
    res.on('data', (chunk) => {
      data += chunk
    }).on('end', () => {
      var status = true
      try {
        var result = JSON.parse(data)
        status = result.success
      } catch(err) {
        status = false
        data = JSON.stringify(errorJson)
      }
      cb && cb(data, status)
    })
  }).on('error', (err) => {
    errorJson.msg = err.message
    cb && cb(JSON.stringify(errorJson), false)
  })

  request.end()
}

module.exports = ajaxHandler