import { observable, action } from 'mobx'

class UserInfo {
  @observable user = {
    name: '小明'
  }
  @action setUserInfo(user) {
    this.user = user
  }
}

export default new UserInfo()
