import { observable, action } from 'mobx'

class RouteLocation {
  @observable selectKey = '0'
  @observable openKey = 'home'

  @action updateSelectKey(s) {
    this.selectKey = s
  }

  @action updateOpenKey(o) {
    this.openKey = o
  }

}


export default new RouteLocation()