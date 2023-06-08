import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
           parentName: 'Parent'
      }
      //1.1 binding here
      this.greetParent=this.greetParent.bind(this)
    }

    //Step : 1 In Parent define the method
    greetParent(childName){
        //alert('Hello '+ this.state.parentName)
        //1.1 we are using this so we have to bind this in cobstructor 
        alert(`Helloo ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
      <div>
        {/*Step 2: Pass the method as a prop */}
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
