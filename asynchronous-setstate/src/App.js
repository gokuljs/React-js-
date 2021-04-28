import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){// this allows you to use props inside constructor
    super(props);
    this.state={
      meaningOfLife:47,
    }
  }

  handleClick=()=>{
  // one rule always to be followed in react 
  // in your setstate calls when ever you use this.state or props then we dont pass it in form of objects like given below
  // this.setState({meaningOfLife:this.state.meaningOfLife+1})
  // so instead of passing functions with two parammeters like prevStates and prevprops
    this.setState((prevState,prevProps)=>{
      // this gaurantees the latest previouse state before update 
      return {meaningOfLife:this.state.meaningOfLife+1}

    },()=>console.log(this.state.meaningOfLife))
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOfLife}
          </p>
         
          <button
          onClick={this.handleClick}
          >
             Increment
          </button>
        </header>
      </div>
    );
  }

}

export default App;
