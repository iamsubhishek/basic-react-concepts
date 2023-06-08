import React,{Component} from "react"

class StateClassCompExample extends Component{


//step 1 : Create state object initialize. This thing done mostly in constructor.
constructor() { 
    super()
this.state={
    message: 'Welcome visitor'
}
}

 //step 4 : Create function for set state  
 changeMessage(){
this.setState({
message:'Thank you for subscriber'
})
}

    render (){
        return (
            <div>
                {/* step 2 : calll the state */}
                <h1>{this.state.message}</h1>

                {/* step 3 : add click event for change message  */}
               {/*()=> this.changeMessage() = we have created handler  */}
                <button onClick={()=> this.changeMessage()}> Subscribe</button>

            </div>
        )
    }
}

export default StateClassCompExample