import { observable, action } from 'mobx'

class RouteLocation {
  @observable selectKey = '0'
  @observable openKey = 'home'
  @observable isMenu = true

  @action updateSelectKey(s) {
    this.selectKey = s
  }

  @action updateOpenKey(o) {
    this.openKey = o
  }

  @action setMenuable(b) {
    this.isMenu = b
  }

}


export default new RouteLocation()