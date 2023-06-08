import React from "react";

const Jsxexanple= () => {
    //with jsx
    // return (
    //     <div className="dummyClass">
    //         <h1>Hello Subhishek</h1>
    //     </div>
    // )

    //without jsx with react component

    return React.createElement(
        'div',
        {id:'hello',className:'dummyClass'},
        React.createElement('h1',null,'Hello Subhishek')
    )
}

export default Jsxexanple;