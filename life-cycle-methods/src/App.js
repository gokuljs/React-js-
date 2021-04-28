import React from 'react';
import logo from './logo.svg';
import Lifecycles from './lifecycles.component';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      showChild:true,
      text:'',
    };
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={()=>{
            this.setState(state =>({
              showChild:!state.showChild,
            }))
          }

          }
        >
          Toggle lifecyle
        </button>
        <button
          onClick={()=>
          this.setState(state=>({
            text:state.text+'_hello',
          }))}
        >
          update text 
        </button>
        {this.state.showChild ? <Lifecycles test={this.state.text}/> :null}
      </header>
    </div>
  );
  }
}

export default App;
