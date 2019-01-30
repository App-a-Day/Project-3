const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes');

const app = express();

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/appnotes")
.then(() => console.log('AppNotes connected ^_^'))
.catch(err => console.log(err));

app.get('/api/coders', (req, res) => {
    const coders = [
        {id: 1, firstName: "Ian", lastName: "Dowdy"},
        {id: 2, firstName: "Nicole", lastName: "Pike"},
        {id: 3, firstName: "Alexandria", lastName: "Toothman"},
        {id: 4, firstName: "Patricia", lastName: "Seade"},
        {id: 5, firstName: "Jennifer", lastName: "Tuten"}
    ];
    
    res.json(coders);
})

app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
