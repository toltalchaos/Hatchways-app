import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Accordion = (props) => {
    const [expanded, setExpanded] = useState(false)


    return ( 

        <article>
            <header>
            <h3 onClick={() => setExpanded(!expanded)}>
          title placeholder
        </h3>
        <button className='btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
            </header>
            {expanded && <p>data placeholder</p>}
        </article>

     );
}
 
export default Accordion;