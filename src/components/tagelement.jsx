import React from 'react'
import styled from 'styled-components'

const TAGCARD = styled.div`
background-color: #a7a6a6;
padding: 0 1rem;
border-radius: 0.3rem;
`
const TagElement = (props) => {
    return ( 
        <TAGCARD>
            <p>{props.content}</p>
        </TAGCARD>
     );
}
 
export default TagElement;