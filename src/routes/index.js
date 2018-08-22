
import routeLocation from '@/stores/routeLocation'
export default {
  path: '/',
  children: [
    require('./home').default,
    require('./linechart').default,
    require('./login').default,
    require('./404').default,//404要放在最后
  ],
  async beforeEach({ route, redirect, fullPath }) {
    // debugger
    if (route === this) {
      return
    }
    if (route.isAuth) {
      // const { data } = await axios.get('security.resources.checkUserHasUrlAccessResource', {
      //   params: {
      //     url: fullPath,
      //   },
      // }).then(res => res.getData())
      // if (!data) { // 没权限访问
        // redirect('/401')
      // }
    }
  },
  async action({ next }) {
    let route 
    do {
      route = await next()
      if(route) {
        routeLocation.updateSelectKey(route.locationInfo.selectKey)
        routeLocation.updateOpenKey(route.locationInfo.openKey)
        routeLocation.setMenuable(route.locationInfo.isMenu)
      }
    } while(!route)

    return route
  }
}