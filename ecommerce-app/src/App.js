import React from 'react';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import './App.css';

import HomePage from './pages/homepage/homepage.component';



function App() {
  return (
    <div >
    {/* swicth component is used by wrapping all route components */}
   
    <Switch>

    {/* exact is an true or false argument */}
    {/* component is the ui which we want to render  */}
    {/* path you give the your own path */}
  <Route exact path='/' component={HomePage} />
  <Route path='/shop' component={ShopPage} />

    </Switch>
  
    </div>
  );
}

export default App;
