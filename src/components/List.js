import React from 'react'

function List() {
    const names= ['India','Germany','Russia','Israel']
    const nameList= names.map(name=> <h2>{name}</h2>)
  return (
    <div>{nameList}</div>
  )
}

export default List
