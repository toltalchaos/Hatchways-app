import React from 'react'


const TestList = (props) => {
    console.log("working")
    return ( 
        <p>Test {props.index}: {props.test}</p>
     );
}
 
export default TestList;