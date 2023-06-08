import React from 'react'
import Person from './Person'

function PersonDetails() {
    const persons=[
        {id:1,name:'Subhishek',age:28,skill:'.Net core, React, Python,Sql'},
        {id:2,name:'Abhishek',age:28,skill:'.Net core, React, Python,Sql'},
        {id:3,name:'Dummy',age:28,skill:'.Net core, React, Python,Sql'},
    ]
    const lists= persons.map(person=> (
      //<h4>{person.name} {person.age}</h4>

     <Person key={person.id} person={person}></Person>
    ))
  return (
    <div>
      {lists}
    </div>
  )
}

export default PersonDetails
