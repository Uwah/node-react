import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'mobx-react'
import Layout from './components/Layout'
import routeLocation from './stores/routeLocation'
import userInfo from '@/stores/userInfo'
import '@/css/App.scss'
import 'antd/dist/antd.css'
// import './api/request' //请求统一拦截、配置

const stores = {
  routeLocation,
  userInfo
}
const ContextType = {
  history: PropTypes.object.isRequired,
  toPath: PropTypes.func.isRequired,
  isRouteMatchByPath: PropTypes.func.isRequired
}

class App extends React.Component {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
    currentRoute: PropTypes.object.isRequired
  }

  static childContextTypes = ContextType

  getChildContext() {
    return this.props.context
  }
 
  render() {
    const child = React.Children.only(this.props.children)
    return(
      <Provider {...stores}>
        <Layout>{child}</Layout>
      </Provider>
    )
  }
}

export default App