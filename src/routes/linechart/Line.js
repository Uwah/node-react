import React from 'react'
import axios from 'axios'

const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
// // 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');



import '@/css/linechart.scss'
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

  initLineChart() {
    const chart = echarts.init(document.getElementById('line-chart'))
    const option = {
      title: {
        text: 'line chart'
      },
      tooltip: {}, 
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
    chart.setOption(option)
  }

  componentWillMount() {
    // this.getSomethingData()
    // this.initLineChart()
  }

  componentDidMount() {
    this.initLineChart()
  }
  render() {
    return (
      <div><div id="line-chart"></div></div>
    )
  }



}


export default Line