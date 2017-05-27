import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import RoleSelector from './components/RoleSelector.jsx';
import DriverForm from './components/DriverForm.jsx';
import AppLogin from './components/AppLogin.jsx';
import Signup from './components/signup.jsx';
import RiderForm from './components/RiderForm.jsx';
import Home from './components/Home.jsx';
import AllDrivers from './components/AllDrivers.jsx';
import App from './components/App.js';

// child clone in react router in order to pass state?
// below in the future you can nest componets inside other "routes". with react router client react-router makes app a SPA app
// and does not make calls to the server to serve up other routes. it's already on client. 
//notice the difference between self-closing tags and the tags that are being closed with </Route> this is how you can nest
//components
ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {RoleSelector}>
        <Route path = "/alldrivers" component = {AllDrivers}/>
        <Route path = "/home" component = {Home}/>

        <IndexRoute component= {AppLogin} />
        <Route path = "/signup" component = {Signup} />
        <Route path = "/roleselector" component = {RoleSelector}>
        

          <Route path = "/driver" component = {DriverForm}/>
          <Route path = "/rider" component = {RiderForm}/>
        </Route>
     </Route>

   </Router>
	
), document.getElementById('app'))

