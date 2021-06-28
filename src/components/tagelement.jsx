import React from 'react'
import styled from 'styled-components'

const TAGCARD = styled.div`
background-color: grey;
padding: 1rem;
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