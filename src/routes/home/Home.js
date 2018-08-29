import React from 'react'
import { observer, inject } from 'mobx-react'
import axios from '@/api/request'
@inject('userInfo')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  dicTest() {
    axios.get('/dic/list', {
      params: {
        type: "district", level: "2", activeState: '1'
      }
    }).then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        <h4>{this.props.userInfo.user.name}</h4>
        <button onClick={this.dicTest}>dic</button>
      </div>
    )
  }
}

export default Home