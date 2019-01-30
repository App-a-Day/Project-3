var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
var TutorialSchema = new Schema({
     // Headline
  link: {
    type: String,
    required: true
  },
  //set default to false to load initial articles to home page
  isSaved: {
    type: Boolean,
    default: false
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Tutorial = mongoose.model("Tutorial", TutorialSchema);

// Export the Note model
module.exports = Tutorial;