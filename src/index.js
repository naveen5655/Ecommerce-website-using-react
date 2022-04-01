import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Link,BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './Comp/R_event';
import Home from './Comp/Home';
import photo from './images/background.jpg'
import Signup from './Comp/Signup';
const routing=(
  <Router>
    <div style={{ backgroundImage:`url(${photo})`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'}} >
      <center>
     <Route exact path="/" component={App}/>
     <button><Link to ="/Home"> Login</Link></button><br/>
       <Route path="/Home" component={Home}/>
     <button><Link to="/Signup">signup</Link></button>
         <Route path="/Signup" component={Signup}/>
     </center>
    </div>
  </Router>
)
ReactDOM.render(routing,document.getElementById('root'));