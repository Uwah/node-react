import React from 'react'
import HeadTab from './HeadTab'
import Content from './Content'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import SideMenu from './SideMenu'

import '@/css/layout.scss'

@inject('routeLocation')
@observer
class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'layout'
    }
  }
  static propsTypes = {
    children: PropTypes.element.isRequired
  }

  handleClick = (e) => {
    console.log('click', e)
  }
  // handleClick(e){
  //   console.log('click', e)
  // }

  render() {
    const { routeLocation } = this.props
    return (
      <div className="layout-content">
        <HeadTab></HeadTab>
        <div className="content-layout">
          {routeLocation.isMenu?<SideMenu routeLocation={routeLocation}></SideMenu>:null}
          <div className="right-content">{this.props.children}</div>
        </div>
      </div>
    )
  }

}

export default Layout