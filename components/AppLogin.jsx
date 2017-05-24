import React from 'react';
import {browserHistory } from 'react-router'

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="innerLogin">
        <form>
          <label>User: </label><input type="text"></input><br/>
          <label>Password: </label><input type="text"></input><br/>
          <button type="button" onClick={function(){browserHistory.push('roleselector')}}>Login</button>
          <button type="button" onClick={function(){browserHistory.push('signup'); console.log(browserHistory)}}>Signup</button>
          <button type="button" onClick={function(){browserHistory.push('alldrivers'); console.log(browserHistory)}}>All Drivers</button>
          <button type="submit">Forgot Password?</button>   
        </form>
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default Login;