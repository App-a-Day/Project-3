import React, { Component } from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');


class Mirror extends Component {
  render() {
    return (
       <CodeMirror
       //value={value}
  //options={options}
  onBeforeChange={(editor, data, value) => {
    this.setState({value});
  }}
  onChange={(editor, data, value) => {
    console.log('Uncontrolled', {value});
  }}
/>
      
    );
  }
}

export default Mirror;


