let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  // import School and User 
  School = require('./school');
  User = require('./user')


let RatingsSchema = new Schema({
    // add a limitation of the number rating to be 0-10 / 0-100
     rating: Number,
     comments: String,
     // assign Now() in the form
     ratingDate: Date,
     // we may need to change userId to just user , for school as weel/??
     userId:{type:Schema.Types.ObjectId, ref:'User'} ,
     schoolId:{type:Schema.Types.ObjectId, ref:'School'}
});

var Ratings = mongoose.model('Ratings', RatingsSchema);
module.exports = Ratings;