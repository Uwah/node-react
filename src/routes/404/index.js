import React from 'react'

import Invaid from './Invaid'

export default {
  path: '*',
  name: '404',
  action() {
    return {
      title: '404',
      locationInfo: {
        selectKey: '',
        openKey: '',
        isMenu: false
      },
      component: <Invaid />
    }
  }
}