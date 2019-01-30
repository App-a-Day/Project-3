import React, { Component } from "react";
import "./Lessons.css";

class Lesson2 extends Component {
  render() {
    return (
      <div>
        <div className="ui container">
          <div className="ui equal width center aligned padded grid">
            <div className="column" />
            <div className="lesson-header">
              <h1>Lesson 2: Loops</h1>
            </div>
            <div className="lesson-container">
              <img
                alt=""
                className="lesson-pics"
                src="../../assets/images/loops.png"
              />
              <iframe
                className="editor-container"
                src="https://stackblitz.com/edit/js-1wvg6o?embed=1&file=index.js"
                view="Editor"
                title="code editor"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lesson2;
