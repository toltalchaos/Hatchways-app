import React, {useState} from 'react';
import styled from "styled-components";

import DisplayField from '../components/displayfield';
import SearchBar from '../components/searchbar';

const LANDINGSTYLES = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

`

const LandingPage = (props) => {

    //create stateful object to handle data
    const [DataContainer, setDataContainer] = useState(null);
    //create stateful object to hang on to search data
    const [searchParams, setSearchparams] = useState("");
    const searchbarhandle = document.getElementById('search');


    function updateSearchParams(e){
        //console.log(searchbarhandle.value)
        if(searchbarhandle != null){
            setSearchparams(searchbarhandle.value)
        }
        else{
            //do nothing?
        }
    }

    async function FindData(desiredData){
        //fetch data
        let res= await fetch('https://api.github.com/users');
        let data = await res.json()
       
        //set stateful object to fill with new json object
        //parse object here and setdatacontainer accordingly
        setDataContainer(JSON.stringify(data))
        //console.log("container " + DataContainer)
    }
    
    FindData()   
    return ( 
       <LANDINGSTYLES>
           <div>
           <h1>TEST</h1>
            <SearchBar onKeyUp={updateSearchParams}/>
            <DisplayField object={DataContainer} searchValue ={searchParams}/>
            </div>
       </LANDINGSTYLES>
     );
}
 
export default LandingPage;