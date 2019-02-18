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
      {method: "GET", path: "/api/users", adescription: "Get all users"}, //Lourdes
      {method: "GET", path: "/api/users/:id", adescription: "Get 1 user"},
      {method: "POST", path: "/api/users", description: "Create a new user"},
      {method: "PUT", path: "/api/users/:id", description: "Update a user"},
      {method: "DELETE", path: "/api/users/:id", description: "Delete a user"},
      {method: "GET", path: "/api/schools", description: "Get all schools"}, //Nassima
      {method: "GET", path: "/api/schools/:id", description: "Get 1 school"},
      {method: "POST", path: "/api/schools", description: "Create a new school"},
      {method: "PUT", path: "/api/schools/:id", description: "Update a school"},
      {method: "DELETE", path: "/api/schools/:id", description: "Delete a school"},
      {method: "GET", path: "/api/ratings", description: "Get all ratings"}, //Matt
      {method: "GET", path: "/api/ratings/:id", description: "Get 1 rating"},
      {method: "POST", path: "/api/ratings", description: "Create a new rating"},
      {method: "PUT", path: "/api/ratings/:id", description: "Update a rating"},
      {method: "DELETE", path: "/api/ratings/:id", description: "Delete a rating"}
    ]
  })
});

// CRUD FOR USERS
app.get('/api/users', (req, res) => {
  db.Users.find({}, (error, users) => {
    res.json(users);
  }); 
});

app.get('/api/users/:id', (req, res) => {
  db.Users.find({_id: req.params.id}, (error, users) => {
    res.json(users);
  }); 
});

app.post('/api/users', (req, res) => {
  var newUser = new db.Users({
    userName: req.body.userName,
    password: req.body.password,
    createdUserDate: req.body.createdUserDate,
    avatar: req.body.avatar
  });
  newUser.save((error, user) => {
    res.json(user);
  });
});

app.put('/api/users/:id',(req,res) => {
    console.log('update user', req.params);
    console.log(`the body is${req.body}`);
    const userId = req.params.id;
    db.Users.findOneAndUpdate(
      {_id:userId},
      req.body,
      {new: true},
      (err, updateUser) => {
        if(err) {throw err;}
        res.json(updateUser);
      });
  });
  
  app.delete('/api/users/:id', function (req, res) {
    const userId = req.params.id;
    console.log('delete user', userId);
    db.Users.findOneAndDelete({_id: userId}, (err, deletedUser) => {
      if(err) { throw err; }
      res.json(deletedUser);
    });
  });


/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Express server is up and running on http://localhost:3000/');
  });

