import React, { Component } from 'react'

 class ClickCounterex extends Component {
  
  render() {
  
    const { count,incrementCount } = this.props
    return <button onClick={incrementCount}>click {count} times</button>
  }
}

export default ClickCounterex
