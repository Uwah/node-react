import React from 'react'
import Home from './Home'

export default {
  path: '/',
  name: 'home',
  action() {
    return {
      title: '数据统计分析',
      component: <Home key="home"/>
    }
  }
}