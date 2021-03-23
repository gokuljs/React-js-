// import React,{component} from 'react';
import React, { Component } from 'react';
import "./App.css";

class App extends Component{
  constructor(){
    super();
    // normally when you extend a componenet class and use to constructor super 
    // wer are getting access to this.state and this.setstate
    // component class is giving us acces to this two things one is where we store it other to used for updation 
    // now we are creating monster array 
    this.state={
        monster:[
          // {name:"frank", id:"121"},
          // {name:"diablo",id:"122"},
          // {name:"dracula",id:"123"},
          // {name:"vampire",id:"124"},
          // {name:"zombie",id:"125"}
        ]
    };
  }
  // which comes under life cycle methods when thr component gets remdered 
  componentDidMount(){
    // when it renders it calls block of code inside 
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) // this will return an response in json format 
    .then(users=> this.setState({monster:users}))// this will return an inside array 
   }


  render(){
    return (
      <div className="App">

        {
          // we are trying to access the monster array inside this state 
          // we are goign to using map to traverse each element inside an array 
          // normally map takes a function 
          // Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it
          // key helps the id know which elemnets 
          this.state.monster.map(monster=>(<h1 key={monster.id}>{monster.name}</h1>))
        }

  </div>
    )
  }
}

export default App;
