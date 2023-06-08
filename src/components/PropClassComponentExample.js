import React,{Component} from "react";

class PropClassComponentExample extends Component{
    render(){
        return (
<h1>Wlcome {this.props.name} and profile is {this.props.profile} </h1>
        )
    }
}

export default PropClassComponentExample