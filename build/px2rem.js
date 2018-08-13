const postcss = require('postcss')
const pxRegExp = /\b(\d+(\.\d+)?)px\b/


const defaultConfig = {
  baseDpr: 2,             // base device pixel ratio (default: 2)
  remUnit: 75,            // rem unit value (default: 75)
  remPrecision: 6,        // rem value precision (default: 6)
  keepComment: 'no'       // no transform value comment (default: `no`)
}
function getCoverValue(value, dpr, config) {

  const pxGlobalRegExp = new RegExp(pxRegExp.source, 'g')

  function getValue(val) {
    val = parseFloat(val.toFixed(config.remPrecision)) // control decimal precision of the calculated value
    return val == 0 ? val : val + 'rem'
  }

  return value.replace(pxGlobalRegExp, function ($0, $1) {
    return getValue($1 / config.remUnit)
  })

}

module.exports = postcss.plugin('px2rem', function (opts) {
  opts = Object.assign({}, defaultConfig, opts)
  const dpr = 2

  return function (css) {
    css.walkDecls(function (decl, i) {

      if (!decl || !(decl.type === 'decl' && pxRegExp.test(decl.value))) {
        return
      }
      const nextDecl = decl.next()
      if (nextDecl && nextDecl.type === 'comment' && nextDecl.text.trim() === opts.keepComment) {
        return
      }

      decl.value = getCoverValue(decl.value, dpr, opts)
    })

  }
})
