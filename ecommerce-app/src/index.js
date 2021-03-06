import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* now we are passing all the react router functionality to browser router */}
    {/* this component gives all the functionality to all the components sitting between them  */}
    <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


