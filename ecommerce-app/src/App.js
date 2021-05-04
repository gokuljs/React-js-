import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage=()=>(
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div >
    {/* swicth component is used by wrapping all route components */}
   
    <Switch>

    {/* exact is an true or false argument */}
    {/* component is the ui which we want to render  */}
    {/* path you give the your own path */}
  <Route exact path='/' component={HomePage} />
  <Route path='/hats' component={HatsPage} />

    </Switch>
  
    </div>
  );
}

export default App;
