import React, { Component } from "react";
//import Jumbotron from "../Jumbotron/Jumbotron";
import API from "../../utils/API";
//import DeleteBtn from "../components/DeleteBtn";
//import { Col, Row, Container } from "../components/Grid";

import { Input, TextArea, FormBtn } from "../Form/Form";
import faker from "faker";

import "./Resources.css";
import DeleteBtn from "../DeleteBtn/DeleteBtn";

class Resources extends Component {
  state = {
    comments: [],
    title: "",
    synopsis: "",
    date: ""
  };

  componentDidMount() {
    this.loadComments();
    console.log("comments loading...");
  }

  loadComments = () => {
    API.getComments()
      .then(res =>
        this.setState({ comments: res.data, title: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };
  deleteComment = id => {
    API.deleteComment(id)
      .then(res => this.loadComments())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  // handleIncrement increases this.state.count by 1
  handleLikes = () => {
    // We always use the setState method to update a component's state
    this.setState({ likes: this.state.likes + 1 });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.synopsis) {
      API.saveComment({
        title: this.state.title,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadComments())
        .catch(err => console.log(err));
    }
  };

  //ToDo if there's time: add a thumbs-up icon and display # of likes
  /**
  <button onclick={this.handleLikes}>Like</button>
  {comment.likes}      
   */
  render() {
    return (
      <div className="box">
        <div className="header">
          <h1>We'd love to hear from you!</h1>
          <h5>
            Do you have any resources that have helped you? Any suggestions for
            new tutorials?
          </h5>
          <h5>Please feel free to share below!</h5>
        </div>
        <div className="feedback">
          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Your Name"
            />
            <TextArea
              value={this.state.synopsis}
              onChange={this.handleInputChange}
              name="synopsis"
              placeholder="Message"
            />
            <FormBtn onClick={this.handleFormSubmit}>Submit Comment</FormBtn>
          </form>
        </div>

        <div className="ui two column centered grid">
          <div className="column">
            {this.state.comments.length ? (
              <div className="comment">
                {this.state.comments.map(comment => (
                  <div className="ui container comments">
                    <div className="comment">
                      <a key={comment._id} href="/" className="avatar">
                        <img alt="avatar" src={faker.image.avatar()} />
                      </a>
                      <div className="content">
                        <div className="author">
                          {comment.title}

                          <div className="metadata">
                            <span className="date">{comment.date}</span>
                          </div>
                        </div>

                        <div className="text">{comment.synopsis}</div>
                        <DeleteBtn
                          onClick={() => this.deleteComment(comment._id)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
