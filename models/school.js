let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  
let SchoolSchema = new Schema({
     schoolName: String,
     aboutSchool: String,
     schoolAddress: String,
     district: String,
     academicRating: Number,
     // create a function to avg the user rating
     userRating: Number,
     schoolImg:String,
     // we need to break down the address to cityName, county, state
});

var School = mongoose.model('School', SchoolSchema);
module.exports = School;