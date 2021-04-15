import React from 'react';
import './search-box.styles.css';
// creating a reusable searchbox component 
// there are mainly two types of component class and functioonal component 
// class components have acces to this.state life cycle methods where fucntional components does not 
// Now if you just want to render something in the web page then we can go with fucntional component

export const SearchBox=({placeholder,handlechange})=>(
    <input type="search"
    className="search"
    placeholder={placeholder}
     onChange={handlechange} />
)
