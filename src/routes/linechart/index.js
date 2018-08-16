import React from 'react'
import Line from './Line'

export default {
  path: '/linechart',
  // children: []
  name: 'linechart',
  action() {
    return {
      title: '折线图',
      component: <Line key="line-chart"/>
    }
  }
}