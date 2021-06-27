import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styled from "styled-components";
import SearchBar from './searchbar';

const UNIT = styled.article`
header{
display: flex;
justify-content: space-between;
}
button{
    margin: 0 0 0 0.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: none;

}
button:hover{
    background-color: tomato;
}
border: 1px solid black;
border-radius: 1rem;
padding: 1rem;
margin:1rem;
`


const Accordion = (props) => {
    const [expanded, setExpanded] = useState(false)
    const [textInput, setTextInput] = useState();
    const inputbarhandle = document.getElementById(props.element.login);


    function updateSearchParams(e){
        //console.log(searchbarhandle.value)
        if(inputbarhandle != null){
            setTextInput(inputbarhandle.value)
        }
        else{
            //do nothing?
        }
    }

    return ( 

        <UNIT>
            <header>
            <h3 onClick={() => setExpanded(!expanded)}>
                {/* title data parsing object */}
          {props.element.firstName}
        </h3>
        <button className='btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
            </header>
            {expanded && 
            
            <div>
                <SearchBar idd={props.element.id} onKeyUp={updateSearchParams}/>
                
            </div>}
        </UNIT>

     );
}
 
export default Accordion;