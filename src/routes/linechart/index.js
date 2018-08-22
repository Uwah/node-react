import React from 'react'
import Line from './Line'

export default {
  path: '/linechart',
  // children: []
  name: 'linechart',
  action() {
    return {
      title: '折线图',
      locationInfo: {
        selectKey: '1',
        openKey: 'sub1',
        isMenu: true
      },
      component: <Line key="line-chart"/>
    }
  }
}