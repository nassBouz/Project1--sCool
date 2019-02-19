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

  app.delete('/api/users/:id', (req, res) =>{
    const userId = req.params.id;
    console.log('delete user', userId);
    db.Users.findOneAndDelete({_id: userId}, (err, deletedUser) => {
      if(err) { throw err; }
      res.json(deletedUser);
    });
  });

  // CRUD FOR SCHOOLS
  app.get('/api/schools', (req, res) => {
    db.Schools.find({}, (error, schools) => {
      res.json(schools);
    }); 
  });
 
  app.get('/api/schools/:id', (req, res) => {
    db.Schools.find({_id: req.params.id}, (error, schools) => {
      res.json(schools);
    }); 
  });

  app.post('/api/schools', (req, res) => {
    var newSchool = new db.Schools({
      schoolName: req.body.schoolName,
      aboutSchool: req.body.aboutSchool,
      schoolAddress: {
        streetAddress:req.body.streetAddress,
        city:req.body.city,
        state:req.body.satate,
        zipCode:req.body.zipCode
        // req.body.schoolAddress,
        },
      district: req.body.district,
      academicRating: req.body.academicRating,
      userRating: req.body.userRating,
      schoolImg: req.body.schoolImg,
      contactInfo: req.body.contactInfo
    });
    newSchool.save((error, school) => {
      res.json(school);
    });
  });

  app.put('/api/schools/:id',(req,res) => {
      console.log('update school', req.params);
      console.log(`the body is${req.body}`);
      const schoolId = req.params.id;
      db.Schools.findOneAndUpdate(
        {_id:schoolId},
        req.body,
        {new: true},
        (err, updateSchool) => {
          if(err) {throw err;}
          res.json(updateSchool);
        });
   });
    
  app.delete('/api/schools/:id', (req, res) =>{
    const schoolId = req.params.id;
    console.log('delete school', schoolId);
    db.Schools.findOneAndDelete({_id: schoolId}, (err, deletedSchool) => {
      if(err) { throw err; }
      res.json(deletedSchool);
    });
  });


  // ////////////////////////////RATINGS CRUD 

  app.get('/api/ratings', (req, res) => {
    db.Ratings.find({}, (error, ratings) => {
      res.json(ratings);
    }); 
  });
 
  app.get('/api/ratings/:id', (req, res) => {
    db.Ratings.find({_id: req.params.id}, (error, ratings) => {
      res.json(ratings);
    }); 
  });
//create new rating /comment
  app.post('/api/ratings', (req, res) => {
    let newRating = new db.Ratings({
      rating: req.body.rating,
      comments: req.body.comments,
      ratingDate: req.body.ratingDate,
      // userId:"yanniB" ,
    });
    // find the school from  the req.body
    db.Schools.findOne({schoolName : req.body.school}), (err,school)=>{
      if(err){return console.log(err);}
    }
    // if school doesnt exixt dont create one, return error
    if(schoolId == null){
      console.log("school not in the db")
    }
    else {
      createNewRating(newRating, school, res);
    }
    newRating.save((error, rating) => {
      res.json(rating);
    });
  });

  function createNewRating(rating, school, res){
    rating.schoolId = schoolId;
    rating.save(function(err, rating){
      if(err){return console.log("save error: "+ err);}
      console.log("saved", rating.rating);
      res.json(rating);
    });
  }


/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Express server is up and running on http://localhost:3000/');
  });

