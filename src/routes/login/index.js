import React from 'react'
import Login from './Login'

export default {
  path: '/login',
  name: 'login',
  action() {
    return {
      title: '登录',
      locationInfo: {
        selectKey: '1',
        openKey: 'sub1',
        isMenu: false
      },
      component: <Login key="login-com"/>
    }
  }
 }