import React, { PropTypes } from 'react'


class App extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string
  // }
 
  render() {
    // const child = React.Children.only(this.props.children)
    // console.log(child)
    return(
      <div>
        { this.props.name }
      </div>
    )
  }
}

export default App