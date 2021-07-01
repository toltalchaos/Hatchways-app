import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import DisplayField from '../components/displayfield';
import SearchBar from '../components/searchbar';

const LANDINGSTYLES = styled.div`
font-family: 'Raleway', sans-serif;
display: flex;
flex-direction: column;
input{
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid rgba(94,94,94,0.23);
}

`

const LandingPage = (props) => {

    //create stateful object to handle data
    const [handler, setHandler] = useState(null);
    const [DataContainer, setDataContainer] = useState([]);
    let newKey = 1;
    //create stateful object to hang on to search data
    const searchbarhandle = document.getElementById('search');


    function updateSearchParams(e){
        if(searchbarhandle != null){
           //logic to update search params
           //loop through filter and fix casing issues
            setDataContainer(handler.filter((person) => {
            const name = person.firstName + person.lastName;
            let keyval = searchbarhandle.value.toUpperCase()
               if(name.toUpperCase().includes(keyval))
               {
                   
                   return person;
               }
               
               
            }));
            
            

            
        }

    }

    function SearchByTag(e){
        //loop each card - looking for classes matching the incoming value
        const cards = document.getElementsByClassName('student-card')
        console.log(e.key, cards)

        //iterate over cards
        for (let index = 0; index < cards.length; index++) {
            const element = cards[index];
            
            console.log(element)
            //if tag -> exists - remove hide-me class
            
            //else -> .hide-me class
        }
            
        


    }

useEffect(()=>{

        //fetch data  
        fetch('https://api.hatchways.io/assessment/students').then(ans => ans.json().then(data => {
            setDataContainer(data.students)
            setHandler(data.students)
    }));

},[])

    
        
    
    return ( 
        <LANDINGSTYLES>
            <div>
            
             <SearchBar idd= "search" onKeyUp={updateSearchParams} place="search by name"/>
             <SearchBar idd= "tag" onKeyUp={SearchByTag} place="search by tag"/>
             <DisplayField object={DataContainer}/>
             
             
             </div>
        </LANDINGSTYLES>
      );

    
}
 
export default LandingPage;