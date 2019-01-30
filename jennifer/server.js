var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require all models
var db = require("./models");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure mongoose
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongotest";
mongoose.connect(MONGODB_URI);

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/mongotest", { useNewUrlParser: true });

//Load unsaved tutorials
/*db.Tutorial.create({ link: "https://www.codecademy.com/learn/learn-html" })
  .then(function(dbTutorial) {
    // If saved successfully, print the new Library document to the console
    console.log(dbTutorial);
  })
  .catch(function(err) {
    // If an error occurs, print it to the console
    console.log(err.message);
  });*/

// Retrieve data from the db
/*============================
============================*/

//Find all tutorials
app.get("/tutorial", function (req, res) {
  // Grab every document in the Tutorials collection
  db.Tutorial.find({})
    .then(function (dbTutorial) {
      // If we were able to successfully find Tutorials, send them back to the client
      res.json(dbTutorial);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

//Route for notes
app.get("/note", function (req, res) {
  // Grab every document in the Tutorials collection
  db.Note.find({})
    .then(function (dbNote) {
      // If we were able to successfully find Tutorials, send them back to the client
      res.json(dbNote);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

//Route for notes by ID
app.get("/note/:id", function (req, res) {
  db.Note.findOne({ _id: req.params.id })
  .populate("note")
    .then(function (dbNote) {
      res.json(dbNote);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

//Update tutorial status to saved
app.put("/tutorial/:id", function (req, res) {
  db.Tutorial.update({ _id: req.params.id }, { $set: { isSaved: true } })
    .then(function (dbTutorial) {
      // If we were able to successfully find saved tutorials, send them back to the client
      res.json(dbTutorial);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

/*========================
CURRENTLY UNSAVING, BUT NOT BEING RETURNED TO THE INDEX PAGE
TRIED TOGGLING TRUE/FALSE WHICH DIDN'T WORK
========================*/
app.delete("/tutorial/:id", function (req, res) {
  // Using the id passed in the id parameter, prepare a query that updates the matching one in our db...
  db.Tutorial.remove({ _id: req.params.id })

    .then(function (dbTutorial) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      res.json(dbTutorial);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

//Find tutorial by specific ID to add note
app.get("/tutorial/:id", function (req, res) {
  db.Tutorial.findOne({ _id: req.params.id })
  .populate("note")
    .then(function (dbTutorial) {
      res.json(dbTutorial);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Save/update an tutorial's note
app.post("/tutorial/:id", function(req, res) {
  // Create a new note and pass the req.body to the entry
  db.Note.create(req.body)
    .then(function(dbNote) {
      // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      return db.Tutorial.findOneAndUpdate({ note: dbNote._id }, { new: true });
    })
    .then(function(dbTutorial) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbTutorial);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

app.delete("/note/:id", function (req, res) {
  // Using the id passed in the id parameter, prepare a query that updates the matching one in our db...
  db.Note.remove({ _id: req.params.id })

    .then(function (dbNote) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      res.json(dbNote);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});