import React from 'react';
import Directory from '../../components/directory/directory.component.jsx'
import './homepage.styles.scss'
// going to be functional component because dont need any life cycle methods 
const HomePage=()=>(
    <div className="homepage">
    <Directory />
    </div>
);
export default HomePage;