import React from 'react'
import axios from 'axios'
class Line extends React.Component {
  constructor(props) {
    super(props)
  }

  getSomethingData() {
    console.log('get some thing data...')
    axios.get('cms.banner.page', {
      params: {
        pageStart: 1,
        pageSize: 10,
        bannerDTO: {
          type: 2
        }
      }
    }).then(res => {
      console.log(res)
    })
    
  }

  componentWillMount() {
    this.getSomethingData()
  }

  render() {
    return (
      <div>Line Chart1</div>
    )
  }



}


export default Line