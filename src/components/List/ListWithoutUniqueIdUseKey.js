import React from "react";  

function ListWithoutUniqueIdUseKey(){
    const names=['Subhishek','Lucka','Datrick','Milan','Lucka']
    const nameList=names.map((name,index)=> <h2 key={index}>{name}</h2>)
    return <div>{nameList}</div>
}

export default ListWithoutUniqueIdUseKey