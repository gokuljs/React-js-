import React from 'react';
import {Route,Link} from 'react-router-dom';
import './App.css';

const HomePage=(props)=>{
  console.log(props)
  return(
  
  <div>
  {/* link is the special component that react touter dom gives us to property dynamically takes us this link to  */}
  {/* <Link to="/topics"> topics </Link> this is one way of doing dynamic navigation */}
  {/* major diffrence between this and the anchor tag is we dont neeed to render the entire application */}
  {/* here it hijacks the links and decides what part of dom should be showed and what shouldnt be because the react is single page application  */}
  {/* other way using dynamic naviagtion */}
  <button onClick={()=>props.history.push('/topics')}>Topics</button>
  <h1>welcome to home page</h1>
  </div>
);
}
const TopicList=(props)=>{
  console.log(props)
  return(
  <div>
    <h1>list of topic list page</h1>
  </div>
);
}
const TopicDetail=(props)=>{
  console.log(props)
  return(
  <div>
    <h1>
      list of topic details page: {props.match.params.topicId}
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
