import React from 'react'
import './myStyle.css'

function Stylesheet(props) { 
    let className= props.secondary ? 'secondary' : '';
  return (
    <div>
        {/* //Normal css apply */}
      <h1 className='primary'>Subhishek</h1>
      {/* //conditional base css */}
      <h1 className={className}>Subhishek</h1>
      {/* //apply multiple css */}
      <h1 className={`${className} font-xl`}>Subhishek</h1>

    </div>
  )
}

export default Stylesheet
