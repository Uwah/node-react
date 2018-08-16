import { matchRoute, matchRoutePathByName } from './matchRoute'

function resolve(routes, pathOrContext) {
  const context = typeof pathOrContext === 'string' || pathOrContext instanceof String
    ? { path: pathOrContext }
    : pathOrContext
  const root = Array.isArray(routes) ? { path: '/', children: routes } : routes
  let result = null
  let value
  let done = false

  if (pathOrContext.name) {
    // 具名路由匹配
    context.path = matchRoutePathByName(root, {
      name: context.name,
      params: context.params,
    })
  }
  context.fullPath = context.path
  const match = matchRoute(root, '', context.path)

  async function next() {
    ({ value, done } = match.next())

    if (!value || done || (result !== null && result !== undefined)) {
      return result
    }

    const newContext = Object.assign({}, context, value)
    if (root.beforeEach) {
      await root.beforeEach(newContext)
    }
    if (value.route.action) {
      result = await value.route.action(newContext, newContext.params)
    }

    return next()
  }

  context.next = next

  return next()
}

export default resolve
