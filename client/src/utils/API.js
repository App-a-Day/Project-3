import axios from "axios";

export default {
  // Gets all comments
  getComments: function() {
    return axios.get("/api/comments");
  },
  // Saves a comment to the database
  saveComment: function(commentData) {
    return axios.post("/api/comments", commentData);
  },
  deleteComment: function(id) {
    return axios.delete("/api/comments/" + id);
  },
};