import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Lessons.css'
class Lessons extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  getLesson = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Lessons
        </DropdownToggle>
        <DropdownMenu>
          
          <DropdownItem><NavLink className="lessonDropdown" to="/lesson1">Lesson 1: Arrays</NavLink></DropdownItem>
          <DropdownItem><NavLink className="lessonDropdown" to="/lesson2">Lesson 2: Loops</NavLink></DropdownItem>
          <DropdownItem><NavLink className="lessonDropdown" to="/lesson3">Lesson 3: Functions</NavLink></DropdownItem>
          
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default Lessons;