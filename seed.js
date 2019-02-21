// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

const mySchools = [
  {
    schoolName: "Valhalla Elementary School",
    aboutSchool: "k-5",
    schoolAddress: {
    streetAddress:"530 Kiki Dr",
    city:"Pleasant Hill",
    state:"CA",
    zipCode:94523
    },
    district: "Mount Diablo Unified School District",
    academicRating: 9,
    // create a function to avg the user rating
    userRating: 5,
    schoolImg:"some picture",
    contactInfo: {
    phoneNumber: "(925) 687-1700",
    emailAddress:"www.mdusd.org"
    }
  },
  {
    schoolName:"Abraham Prep School",
    aboutSchool: "k-12",
    schoolAddress: {
      streetAddress:"530 Kiki Dr",
      city:"Pleasant Hill",
      state:"CA",
      zipCode:94523
    },
    district: "Alhambra Unified School District",
    academicRating: 9,
    userRating: 5,
    schoolImg:"some picture",
    contactInfo: {
      phoneNumber: "(925) 687-1700",
      emailAddress:"www.mdusd.org"
    }
  },
  {
    schoolName:"Lincoln School",
    aboutSchool: "7-9",
    schoolAddress: {
      streetAddress:"530 Kiki Dr",
      city:"Pleasant Hill",
      state:"CA",
      zipCode:94523
    },
    district: "Pittsburg Unified School District",
    academicRating: 9,
    // create a function to avg the user rating
    userRating: 5,
    schoolImg:"some picture",
    contactInfo: {
      phoneNumber: "(925) 687-1700",
      emailAddress:"www.mdusd.org"
    }
  },
  {
    schoolName: "Petite Academy School",
    aboutSchool: "k-12",
    schoolAddress: {
    streetAddress:"530 Kiki Dr",
    city:"Concord",
    state:"CA",
    zipCode:94523
    },
    district: "Mount Diablo Unified School District",
    academicRating: 6,
    // create a function to avg the user rating
    userRating: 3,
    schoolImg:"some picture",
    contactInfo: {
    phoneNumber: "(925) 687-1788",
    emailAddress:"www.mdusd.org"
    }
  },
];

const myUsers = [
  {
    userName:"yanniB",
    password: "touratoura",
    role: "admin",
    createdUserDate: 10-14-2019,
    avatar: "something here"
  },
  {
    userName:"Miket",
    password: "tou",
    role: "user",
    createdUserDate: 09-13-2019,
    avatar: "something here"
  }
];

const myRatings = [
  {
    rating: 5,
    comments: "very happy with this scholl",
    ratingDate: "2018-2-11",
    user: "yanniB",
    school: "Valhalla Elementary School"
  },
  {
    rating: 3,
    comments: "this school is a mess",
    ratingDate: "2018-3-12",
    user: "Miket",
    school: "Valhalla Elementary School"
  }
]

db.Schools.deleteMany({}, (err, schools) => {
  console.log('remove all schools');
  
  //create the schools first
  db.Schools.create(mySchools, (err, schools) => {
    if(err) { console.log(err); }
    console.log('created all schools');
    console.log(`created ${schools.length} schools`);
  
    /// create the users
    db.Users.deleteMany({},(err, users) => {
      if (err) { console.log('Error occurred in remove', err) } 
      console.log('removed all users from the users list');
      
      // create new records based on the array myUsers
      db.Users.create(myUsers, function(err, users){
        if (err) { return console.log('err', err) }
        console.log("created", users.length, "users");
        console.log(users);

        db.Ratings.deleteMany({}, (err, ratings)=>{
          if(err) { console.log('Error occurred in remove', err) } 
          console.log('removed all ratings');
      
          myRatings.forEach(ratingData => {
            let newRating = new db.Ratings({
              rating: ratingData.rating,
              comments: ratingData.comments,
              ratingDate: ratingData.ratingDate
            });  
      
            // look for school
            db.Schools.findOne({ schoolName: ratingData.school}, (err, foundSchool)=>{
              if (err) { console.log(err) }
              newRating.school = foundSchool;
      
              /// look for user
              db.Users.findOne({ userName: ratingData.user}, (err, foundUser) => {
                if (err) { console.log(err) }
                newRating.user = foundUser;
      
                newRating.save((err, savedRating) => {
                  if (err) { console.log(err) }
                  console.log(savedRating);
                  console.log('saved!!!');
                });
              });
            });
          });
        });
      });
    });
  });
});
