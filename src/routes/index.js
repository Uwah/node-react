export default {
  path: '/',
  children: [
    require('./home').default,
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