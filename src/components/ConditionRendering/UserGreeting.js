import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          isLoggedIn:true  
      }
    }
    
  render() {

//     //this is example of if else
//    if(this.state.isLoggedIn){
//         return <div>Welcome Subhishek</div>
//     }else{
//         return <div>Welcome Guest</div>
//     } 


//this is example of Element variable
// let message
// if(this.state.isLoggedIn){
// message=<div>Welcome Subhishek</div>
// }else{
//     message=<div>Welcome Guest</div>

// }
// return <div>{message}</div>
//   }


//this is example of ternary  operator
//   return this.state.isLoggedIn ? (
//     <div>Welcome Subhishek</div>
// ) : (
//     <div> Welcome Guest</div>
// )



//this is example of Short Case Operator
return this.state.isLoggedIn && <div>welcome Subhishek</div>

}
}
export default UserGreeting
