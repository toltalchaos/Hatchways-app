import React, {useState} from 'react';
import styled from "styled-components";

import Button from '../components/button'
import Accordion from './accordion';


const DisplayField = (props) => {
    let students = props.object
    console.log(props.object)

    if(students == undefined){
        return(
            <div>
            </div> 
        );
    }
    else{
         return(
        <div>
        {students.map((person) => (
            <Accordion element={person}/>
        ))}</div> 
    );
    }


   
 
    }
    
   
 
export default DisplayField;





            
        