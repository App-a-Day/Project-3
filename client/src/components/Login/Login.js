import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './Login.css';

class Login extends Component {
  render() {
    return (
<div>
    <Navigation/>
    <div class="login">
    <h1>Please log in to View Tutorials</h1>
    </div>
</div>

      
    );
  }
}

export default Login;