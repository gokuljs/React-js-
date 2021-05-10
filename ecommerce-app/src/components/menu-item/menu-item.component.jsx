import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss'

// using functional component
// higher order components is a function that takes a component as an argument and returs you a modifed component 
const MenuItem=({title,imageUrl,size,history,linkUrl,match})=>(
<div 
className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`) }>

<div style={{
    backgroundImage:`url(${imageUrl})`
}} className='background-image'/>
    <div className="content">
    <h1 className='title'>{title.toUpperCase()}</h1>
    <span className='subtitle'>SHOP NOW</span>
    </div>
</div>
);
// when you pass menuitem component to higher powered component it will return same menu item component 
// with extra features 
export default withRouter(MenuItem);