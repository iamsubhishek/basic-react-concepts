import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

export class ComponentE extends Component {
  render() {
    return (
      <div>
        {/* And render here context */}
        Component E Context {this.context}
        <ComponentF/>
      </div>
    )
  }
}

//Add here for contextType
ComponentE.contextType=UserContext

export default ComponentE
