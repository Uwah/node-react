import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import createBrowserHistory from 'history/createBrowserHistory'
import { createPath } from 'history/PathUtils'
import router from './router'
import queryString from 'query-string'
let routes = require('./routes').default


const context = {
  history: createBrowserHistory(),
  toPath: router.matchRoutePathByName.bind(null, routes),
  isRouteMatchByPath: router.isMatch.bind(null, routes)
}

const scrollPositionsHistory = {}
if(window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

function onRenderComplate(route, location) {
  document.title = route.title
  let scrollX = 0, scrollY = 0
  const pos = scrollPositionsHistory[location.key]
  if(pos) {
    scrollX = pos.scrollX
    scrollY = pos.scrollY
  } else {
    const targetHash = location.hash.substr(1)
    if(targetHash) {
      const target = document.getElementById(targetHash)
      if(target) {
        scrollY = window.pageYOffset + target.getBoundingClientRect().top
      }
    }
  }

  window.scrollTo(scrollX, scrollY)
}

let currentLocation = context.history.location

const onLocationChange = async (location) => {
  scrollPositionsHistory[currentLocation.key] = {
    scrollX: window.pageXOffset,
    scrollY: window.pageYOffset
  }
  if(context.history.action === 'PUSH') {
    delete scrollPositionsHistory[location.key]
  }

  currentLocation = location

  try {
    const route = await router.resolve(routes, {
      path: location.pathname,
      name: location.name,
      params: location.params,
      query: queryString.parse(location.search),
      context,
      redirect(to) {
        const error = new Error(`Redirecting to >>>${to}<<< `)
        error.status = 301
        error.path = to
        throw error
      }
    })
    render(route, location)
  } catch(err) {
    if(err.status === 301) {
      context.history.replace(err.path || '/')
      return
    }
    if(process.env.NODE_ENV !== 'production') {
      throw err
    }

    console.error(err)
    window.location.href = createPath(location)
  }

}

context.history.listen(onLocationChange)
onLocationChange(currentLocation)
if(module.hot) {
  module.hot.accept('./routes', () => {
    routes = require('./routes').default
    onLocationChange(currentLocation)
  })
}
const render = (route, location) => {
  ReactDOM.render(
    <App context={context} currentRoute={route}>{route.component}</App>,
    document.getElementById('app'),
    onRenderComplate.bind(undefined, route, location)
  )
}

//render
// ReactDOM.render(
//   <App></App>,
//   document.getElementById('app')
// )