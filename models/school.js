const mongoose = require('mongoose'),
  Schema = mongoose.Schema;


const SchoolSchema = new Schema({
     schoolName: String,
     aboutSchool: String,
     schoolAddress: String,
     district: String,
     academicRating: Number,
     // create a function to avg the user rating
     userRating: Number,
     schoolImg:String,
     // we need to break down the address to cityName, county or school district, state
     // contact information (phoneNumber, email@ or a link to their)
});

const School = mongoose.model('School', SchoolSchema);
module.exports = School;
