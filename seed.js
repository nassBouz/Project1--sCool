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
     schoolImg:String,
     contactInfo: {
          phoneNumber: "(925) 687-1700",
          emailAddress:"www.mdusd.org"
     }
}]

  // remove all records that match {} -- which means remove ALL records
  db.Schools.deleteMany({}, function(err, schools){
    if(err) {
      console.log('Error occurred in remove', err);
    } else {
      console.log('removed all schools from the schools list');
  
      // create new records based on the array books_list
      db.Schools.create(mySchools, function(err, schools){
        if (err) { return console.log('err', err); }
        console.log("created", schools.length, "schools");
        process.exit();s
      });
    }
  });