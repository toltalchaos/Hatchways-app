import React, {useState} from 'react';
import styled from "styled-components";

import Button from '../components/button'


const DisplayField = (props) => {

    //stateful object to hold data from search params
    const [DisplayData, setDisplayData] = useState(null);
    console.log(JSON.parse(props.object), props.searchValue)

    function handleSearch(){
        console.log("click registered")
        //search logic here for search field 
        setDisplayData(props.object)
    }

    if(props.object === null){
        return ( <div>
            <Button label="search me" onClick={handleSearch}/>
        </div> );
    }
    else{
        return (  <div>
            <Button label="search me" onClick={handleSearch}/>
            <p>{DisplayData}</p>
        </div> );
    }
    }
   
 
export default DisplayField;