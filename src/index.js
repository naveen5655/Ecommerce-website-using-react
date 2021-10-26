import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Link,BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './Comp/About';
import Contact from './Comp/Contact';
import Christ from './Comp/Christ';
const routing=(
  <Router>
    <div style={{background:'yellow',color:'black'}}>
     
      <h1>React Router Example</h1>
     <ul>
       <li  ><Link to="/">TajMahal</Link></li>
       <li ><Link to="/about">About</Link></li>
       <li ><Link to="/Contact">Contact</Link></li>
       <li><Link to ="/Christ">Christ The Redeemer, Brazil</Link></li>
     </ul>
     <Route exact path="/" component={App}/>
     <Route path="/About" component={About}/>
     <Route path="/Contact" component={Contact}/>
     <Route path="/Christ" component={Christ}/>
     <h1 >Naveen</h1>
      
 
    </div>
  </Router>
)
ReactDOM.render(routing,document.getElementById('root'));