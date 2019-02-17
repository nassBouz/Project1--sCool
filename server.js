const express = require('express');
const app = express();

 /**********
 * MIDDLEWARE *
 **********/

 //parse incoming unlencoded form data
 //also populate the req body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//allow cross origin requests
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

/************
 * DATABASE *
 ************/

const db = require('./models');

//pending database

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {

  res.json({
    message: "Welcome to sCool's API! Here's what you need to know:",
    documentationUrl: "", //Change with repo's README file
    baseUrl: "", //Include heroku base URL
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/user", adescription: "Get all users"},
      {method: "GET", path: "/api/user:id", adescription: "Get 1 user"},
      {method: "POST", path: "/api/user", description: "Create a new user"},
      {method: "PUT", path: "/api/user/:id", description: "Update a user"},
      {method: "DELETE", path: "/api/user/:id", description: "Delete a user"},
      {method: "GET", path: "/api/school", description: "Get all schools"},
      {method: "GET", path: "/api/school:id", description: "Get 1 school"},
      {method: "POST", path: "/api/school", description: "Create a new school"},
      {method: "PUT", path: "/api/school/:id", description: "Update a school"},
      {method: "DELETE", path: "/api/school/:id", description: "Delete a school"},
      {method: "GET", path: "/api/ratings", description: "Get all ratings"},
      {method: "GET", path: "/api/ratings/:id", description: "Get 1 rating"},
      {method: "POST", path: "/api/ratings", description: "Create a new ratings"},
      {method: "PUT", path: "/api/ratings/:id", description: "Update a ratings"},
      {method: "DELETE", path: "/api/ratings/:id", description: "Delete a ratings"}
      
    ]
  })
});


/*---------
 CRUD pending
 **********/

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Express server is up and running on http://localhost:3000/');
  });

