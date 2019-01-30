import React, { Component } from "react";
import TutorialCard from '../TutorialCard/TutorialCard'
import exercises from "../../tutorials.json";
//import { Jumbotron } from 'reactstrap';
import './Exercises.css';

class Exercises extends Component {
  // Setting this.state.exercises to the tutorials json array
  state = {
    exercises
  };

  // Map over this.state.tutorials and render a component for each object
  render() {
    return (
      <div className="exercises">
      <h1>Exercises</h1>

      {this.state.exercises.map(exercise => (
<TutorialCard
            id={exercise.id}
            key={exercise.id}
            title={exercise.title}
            link={exercise.link}
            solution={exercise.solution}
          />
        ))}

        </div>
    );
  }
}

export default Exercises;
