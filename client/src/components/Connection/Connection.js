import React, { Component } from 'react';

import './Connection.css';

class Coders extends Component {
  constructor() {
    super();
    this.state = {
      coders: []
    }
  }

  componentDidMount() {
    fetch('/api/coders')
      .then(res => res.json())
      .then(coders => this.setState({ coders }, () => console.log('Customers fetched..', coders)))
  }


  render() {
    return (
      <div>
        <h2>Coders</h2>
        <ul>
          {this.state.coders.map(coder =>
            <li key={coder.id}> {coder.firstName} {coder.lastName}</li>)}
        </ul>
      </div>
    );
  }
}

export default Coders;
