export default {
  path: '/',
  children: [
    require('./linechart').default
  ],
  async action({ next }) {
    let route 
    do {
      route = await next()
    } while(!route)

    return route
  }
}