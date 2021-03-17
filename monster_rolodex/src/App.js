// import React,{component} from 'react';
import React, { Component } from 'react';

import logo from "./logo.svg";
import "./App.css";

class App extends Component{
  constructor(){
    super();
    // normally when you extend a componenet class and use to constructor super 
    // wer are getting access to this.state and this.setstate
    // component class is giving us acces to this two things one is where we store it other to used for updation 
    this.state={
        monster:[
          {name:"frank"},
          {name:"diablo"},
          {name:"dracula"},
          {name:"vampire"},
          {name:"zombie"}
        ]
    };
  }
  render(){
    return (
      <div className="App">

  </div>
    )
  }
}

export default App;
