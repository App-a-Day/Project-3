import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import './Learn.css';
import Exercises from '../Exercises/Exercises'

class Learn extends Component {
  render() {
    return (
      <div>
      <div className="learn">
      <Exercises/>
      <Footer />
      </div>
      </div>
    );
  }
}

export default Learn;