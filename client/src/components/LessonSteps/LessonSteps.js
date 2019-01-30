import React, { Component } from "react";

import Lessons from "../Lessons/Lessons";

import StepByStep from "../StepByStep/StepByStep";

import Footer from "../Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="ui equal width center aligned padded grid">
            <div className="column">
            <div>
                <div class="login">
                  <h1>Step-by-Step Lessons</h1>
                </div>
              </div>
              <Lessons />
              <StepByStep />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
