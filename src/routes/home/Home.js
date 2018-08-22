import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('userInfo')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Home<h4>{this.props.userInfo.user.name}</h4></div>
    )
  }
}

export default Home