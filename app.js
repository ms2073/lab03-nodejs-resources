const express = require('express');

// Creates the app
const app = express();

// Handles Static HTML, EJS templates
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index'); //ejs extension is not required
});

//Creates route for contacts
app.get('/contacts', (req, res) => {
    res.render('contacts');
});

//Make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Cart app listening at http://localhost:${port}`);
});

//Passes requests to the router middleware
const router = require('./routes/apis');
app.use(router);

//Passes to correctly implement the login/logout feature
const session = require('express-session');
app.use(session({secret: 'some secret code'}));
