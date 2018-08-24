const md5 = require('blueimp-md5')
const config = require('../../config')

function signParam(sysParam, bizParam) {
  const params = {}; // 把bizParam和sysParam一起存放到params里
  const propertyArr = []; // 用来给属性名称排序
  const paramsArr = []; // 用来存放排好序的属性名和属性值
  Object.assign(params, sysParam, bizParam)

  // 给属性名排序
  for (const property in params) {
    propertyArr.push(property)
  }
  propertyArr.sort()

  // 拼接属性名和属性值
  for (let i = 0; i < propertyArr.length; i++) {
    // 为json或数组时,要stringify
    // if ((typeof (params[propertyArr[i]]) == 'object' && Object.prototype.toString.call(params[propertyArr[i]]).toLowerCase() == '[object object]' && !params[propertyArr[i]].length) || Array.isArray(params[propertyArr[i]])) {
    if (typeof (params[propertyArr[i]]) === 'object') {
      paramsArr.push(propertyArr[i] + JSON.stringify(params[propertyArr[i]]))
    } else {
      paramsArr.push(propertyArr[i] + params[propertyArr[i]])
    }
  }

  const str = config.secret + paramsArr.join('') + config.secret

  return md5(str)
}


function sysParam(apiName, bizParam, accessToken) {
  const timestamp = Date.now()

  const appKey = config.appKey

  const version = config.v

  const format = config.format

  const sysParameters = {
    'timestamp': timestamp,
    'v': version,
    'format': format,
    'appKey': appKey,
    'apiName': apiName,
    'session': accessToken || '11'
  }

  sysParameters.sign = signParam(sysParameters, bizParam)

  return JSON.stringify(sysParameters)
}

module.exports = { sysParam }
