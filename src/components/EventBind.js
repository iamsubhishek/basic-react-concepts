import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            message:'Hello'
      }
      //3rd approach to bind event with class Constructor ---React official site
      // this.clickHandler=this.clickHandler.bind(this)
    }
    
    //Define Method
//  clickHandler() 
//     {
//     this.setState({
//         message:'good bye!!!'
//     })   
//     }
//class property as arrow function
    clickHandler1=() => {
        this.setState({
            message:'good byee!!!'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*First approach to binding in render*/}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/*2nd approach to binding in render with arrow function*/}
        {/* <button onClick={()=>this.clickHandler()} >Click </button>  */}
        {/*3rd approach to bind event with class Constructor ---React official site*/}
        {/* <button onClick={this.clickHandler} >Click </button>  */}
        {/*4th approach to bind event class property as arrow function*/}
        <button onClick={this.clickHandler1} >Click </button> 
      </div>
    )
  }
}

export default EventBind
