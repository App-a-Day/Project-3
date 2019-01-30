const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", commentSchema);

module.exports = Message;