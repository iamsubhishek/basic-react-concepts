import React from "react"


// function PropFunctCompExample(props) {
//     return <h2>I am a { props.name }!</h2>;
//  }

 const PropFunctCompExample = (props)=> {
 return(
    <div>
<h1>Heelo {props.name} Working As {props.profile}</h1>
{props.children}
</div>
 ) 
 }

export default PropFunctCompExample