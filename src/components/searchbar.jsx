import React from 'react'

const SearchBar = (props) => {
    return ( 
    <div {...props}>
        <label for="search" hidden='true' >search</label>
        <input type="text" id={props.idd} placeholder={props.place}/>
    </div>
     );
}
 
export default SearchBar;