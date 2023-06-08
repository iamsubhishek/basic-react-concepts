import React from 'react'

// function FRInput() {
//   return (
//     <div>
      
//     </div>
//   )
// }
//Step 3 : Forward ref from parent to here  child component

const FRInput =React.forwardRef((props,ref)=>{
  return(
    <div>
      <input type="text" ref={ref}></input>
    </div>
  )
})
export default FRInput
