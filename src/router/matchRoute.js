import { matchPath, matchBasePath, toPath } from './matchPath'

export function* matchRoute(route, baseUrl, path) {
  let match

  if (!route.children) {
    match = matchPath(route.path, path)

    if (match) {
      yield {
        route,
        baseUrl,
        path: match.path,
        keys: match.keys,
        params: match.params,
      }
    }
  }

  if (route.children) {
    match = matchBasePath(route.path, path)
    if (match) {
      yield {
        route,
        baseUrl,
        path: match.path,
        keys: match.keys,
        params: match.params,
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const childRoute of route.children) {
        const newPath = path.substr(match.path.length)
        yield* matchRoute(
          childRoute,
          baseUrl + (match.path === '/' ? '' : match.path),
          newPath.startsWith('/') ? newPath : `/${newPath}`,
        )
      }
    }
  }
}

export function isMatch(route, path) {
  if (!route.children) {
    if (route.path === '*') {
      return false
    }
    return !!matchPath(route.path, path)
  }
  const match = matchBasePath(route.path, path)
  if (match) {
    const newPath = path.substr(match.path.length)
    if (newPath.length > 0) {
      return !!route.children.find(childRoute => {
        return isMatch(childRoute, newPath.startsWith('/') ? newPath : `/${newPath}`)
      })
    }
    return !!route.action
  }
  return false
}

function findRoute(route, name) {
  let path = route.path
  if (route.name === name) {
    return { path, route }
  } else if (route.children) {
    for (let i = 0; i < route.children.length; i += 1) {
      const result = findRoute(route.children[i], name)
      if (result) {
        path = path.endsWith('/') ? path : `${path}/`
        path += result.path.startsWith('/') ? result.path.substr(1) : result.path
        return { path, result }
      }
    }
  }
  return null
}

export function matchRoutePathByName(routes, { name, params = {} }) {
  const route = findRoute(routes, name)
  if (!route) {
    return '/404'
  }
  return toPath(route.path, params)
}
