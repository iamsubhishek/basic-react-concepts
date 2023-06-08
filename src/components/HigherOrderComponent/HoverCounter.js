import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class HoverCounter extends Component {
  
  render() {
    const { count, incrementCount} = this.props
    return <label onMouseOver={incrementCount}>Hovered {count} times</label>
  }
}

export default UpdatedComponent(HoverCounter)
