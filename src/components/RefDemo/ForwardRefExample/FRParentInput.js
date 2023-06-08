import React, { Component } from 'react'
import FRInput from './FRInput'

 class FRParentInput extends Component {
  constructor(props) {
    super(props)

        //step 1 create ref
        this.inputRef=React.createRef()
  }
  
  clickHandler=()=> {
this.inputRef.current.focus()
alert(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        {/* step 2: Attach the ref to child component using ref */}

        <FRInput ref={this.inputRef}></FRInput>
        {/* Step 4: define click handler */}
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput
