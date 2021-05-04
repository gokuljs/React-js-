import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

const HomePage=(props)=>{
  console.log(props)
  return(
  
  <div>
    <h1>welcome to home page</h1>
  </div>
);
}
const TopicList=()=>{return(
  <div>
    <h1>list of topic list page</h1>
  </div>
);
}
const TopicDetail=()=>{return(
  <div>
    <h1>
      list of topic details page
    </h1>
  </div>
);
}

function App(){
  return(
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/topics" component={TopicList}/> 
       <Route exact path="/topics/:topicId" component={TopicDetail}/>
    </div>
  )
}
export default App;
