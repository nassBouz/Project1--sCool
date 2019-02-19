// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

const mySchools = [{
     schoolName:"Valhalla Elementary School",
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
  // create a function to avg the user rating
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
  
}
]

  // remove all records that match {} -- which means remove ALL records
  db.Schools.deleteMany({}, (err, schools)=>{
    if(err) {
      console.log('Error occurred in remove', err);
    } else {
      console.log('removed all schools from the schools list');
  
      // create new records based on the array books_list
      db.Schools.create(mySchools, (err, schools)=>{
        if (err) { return console.log('err', err); }
        console.log("created", schools.length, "schools");
        console.log(schools);
        //if exit here will not continue the rest of the program
        // process.exit();
      });
    }
  });

  const myUsers = [{
    userName:"yanniB",
    password: "touratoura",
    createdUserDate: 10-14-2019,
    avatar: "something here"
  },
  {
    userName:"Miket",
    password: "tou",
    createdUserDate: 09-13-2019,
    avatar: "something here"
  }
];

  db.Users.deleteMany({},(err, users)=>{
    if(err) { console.log('Error occurred in remove', err);} 
    else { console.log('removed all users from the users list');
      // create new records based on the array books_list
      db.Users.create(myUsers, function(err, users){
        if (err) { return console.log('err', err); }
        console.log("created", users.length, "users");
        console.log(users);
        process.exit();
      });
    }
  });


const myRatings = [{
    rating: 5,
    comments: "very happy with this scholl",
    ratingDate: "2018-2-11",
    userId:"yanniB" ,
    schoolId:"Valhalla Elementary School"
}]

// db.Ratings.deleteMany({}, (err, ratings)=>{
//     if(err) { console.log('Error occurred in remove', err); } 
//     else { console.log('removed all ratings ');
//     //look for a school 
//     db.Schools.findOne({schoolName: Schools.id})
//       // create new records based on the array books_list
//       db.Ratings.create(myRatings, (err, ratings)=>{
//         if (err) { return console.log('err', err); }
//         console.log("created", ratings.length, "ratings");
//         console.log(ratings);
//         process.exit();
//       });
//     }
//   });
