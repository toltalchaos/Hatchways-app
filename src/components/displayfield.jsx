import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import Button from '../components/button'
import Accordion from './accordion';


const DisplayField = ({...props}) => {
    let incomingStudents = props.object
   
   
    if(incomingStudents == undefined){
        return(
            <div>
            </div> 
        );
    }
    else{
         return(
        <div className='student-card'>
        {incomingStudents.map((person) => (

            <Accordion element={person}/>

        ))}</div> 
    );
    }


   
 
    }
    
   
 
export default DisplayField;





            
        