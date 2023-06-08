import React from 'react'

function ChildComponent (props){
  return (
    <div>
       {/*Step 3: In the child component acces the method as a prop */}
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
       {/*Step 3: In the child component acces the method as a prop and also want to pass parameter create arrow function */}
      <button onClick={()=> props.greetHandler('child')}>Greet Parent</button>

    </div>
  )
}

export default ChildComponent
