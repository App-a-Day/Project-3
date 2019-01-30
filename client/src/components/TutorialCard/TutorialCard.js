import React from "react";
import "./TutorialCard.css";

class TutorialCard extends React.Component {
  state = {
    showAnswer: false
  }
  showSolution = () => {
this.setState({showAnswer: !this.state.showAnswer})
  }
  render(){
    const myStyles = {
      solution: {
        display: this.state.showAnswer ? "block" : "none"
      }
    }
    return (
      <div>
        
          <h3>{this.props.title}</h3>
          <div class="wrapper">
    <iframe className="editor-container" id="editor" src={this.props.link} view="Editor" title="code editor"></iframe></div>
    <div class="accordion" id="accordionExample">

  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button onClick={this.showSolution} class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Solution
        </button>
        <p style={myStyles.solution}>{this.props.solution}</p>
      </h5>
    </div>
    {/* <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        <p>{this.props.solution}</p>
      </div>
    </div> */}
  </div>
</div>
</div>
  );
    
  }

}

export default TutorialCard;