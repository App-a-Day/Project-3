import React, { Component } from 'react';



import Connection from '../Connection/Connection';
import CodeEditor from '../CodeEditor/CodeEditor';
import StepByStep from '../StepByStep/StepByStep';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
       <h1>App-A-Day! The choice way to ease yourself in to the hectic world of coding!</h1>
        <Connection id="kit"/>
        <CodeEditor />
        <StepByStep />
      </div>
    );
  }
}

export default Home;
