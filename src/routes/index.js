
import RouteLocation from '@/stores/RouteLocation'
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
      RouteLocation.updateSelectKey(route.locationInfo.selectKey)
      RouteLocation.updateOpenKey(route.locationInfo.openKey)
    } while(!route)

    return route
  }
}