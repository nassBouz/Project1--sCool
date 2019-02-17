const mongoose = require('mongoose'),
const Schema = mongoose.Schema;
  // import School and User 
  School = require('./school');
  User = require('./user')


const RatingsSchema = new Schema({
    // add a limitation of the number rating to be 1-5
     rating: Number,
     comments: String,
     // assign Now() in the form
     ratingDate: Date,
     // we may need to change userId to just user , for school as weel/??
     userId:{type:Schema.Types.ObjectId, ref:'User'} ,
     schoolId:{type:Schema.Types.ObjectId, ref:'School'}
});

const Ratings = mongoose.model('Ratings', RatingsSchema);
module.exports = Ratings;