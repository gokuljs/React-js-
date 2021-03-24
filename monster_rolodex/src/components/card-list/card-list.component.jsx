import React from 'react'; 
// props is the parameter passsed inside cardlist from app.js file 
// one of the most important property in props they have something called children
//
export const CardList=(props)=>{
    console.log(props)
    console.log(props.childreen)
    return <div>{props.children}</div>;
}