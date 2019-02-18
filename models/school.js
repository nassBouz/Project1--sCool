const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SchoolSchema = new Schema({
     schoolName: String,
     /// we need school grade ???
     aboutSchool: String,
     schoolAddress: {
          streetAddress:String,
          city:String,
          state:String,
          zipCode:Number
     },
     district: String,
     academicRating: Number,
     // is this a foreign key (ratiingsId??????)
     userRating: Number,
     schoolImg:String,
     contactInfo: {
          //number or String???
          phoneNumber: String,
          emailAddress: String
     }
});

const School = mongoose.model('School', SchoolSchema);
module.exports = School;
