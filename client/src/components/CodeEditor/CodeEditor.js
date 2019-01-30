import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './CodeEditor.css';

class CodeEditor extends Component {
  render() {
    return (
      <div className="editor">
          <Jumbotron className="this" id="tron">
       <iframe className="editor-container" src="https://stackblitz.com/edit/js-quhffp?embed=1&file=index.js" view="Editor" title="code editor"></iframe>
         </Jumbotron>
      </div>
    );
  }
}

export default CodeEditor;
