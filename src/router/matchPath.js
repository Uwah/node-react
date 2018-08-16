import toRegExp from 'path-to-regexp'

const cache = new Map()

function decodeParam(val) {
  if (val === undefined || val === '') {
    return val
  }

  try {
    return decodeURIComponent(val)
  } catch (err) {
    return val
  }
}

function matchPathBase(end, routePath, urlPath) {
  const key = `${routePath}|${end}`
  let regexp = cache.get(key)

  if (!regexp) {
    const keys = []
    regexp = { pattern: toRegExp(routePath, keys, { end }), keys }
    cache.set(key, regexp)
  }

  const m = regexp.pattern.exec(urlPath)

  if (!m) {
    return null
  }

  const params = Object.create(null)
  const path = m[0]

  for (let i = 1; i < m.length; i += 1) {
    params[regexp.keys[i - 1].name] = decodeParam(m[i])
  }

  return { path: path === '' ? '/' : path, keys: regexp.keys.slice(), params }
}

const compileParamsCache = new Map()
export function toPath(url, params) {
  let compiled = compileParamsCache.get(url)
  if (!compiled) {
    compiled = toRegExp.compile(url)
    compileParamsCache.set(url, compiled)
  }
  return compiled(params)
}

export const matchPath = matchPathBase.bind(undefined, true)
export const matchBasePath = matchPathBase.bind(undefined, false)
