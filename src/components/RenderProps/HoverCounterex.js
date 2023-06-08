import React, { Component } from 'react'

export class HoverCounterex extends Component {

  render() {
    const { count,incrementCount } = this.props
    return <label onMouseOver={incrementCount}>Hovered {count} times</label>
  }
}

export default HoverCounterex
