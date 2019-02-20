const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  // import School and User 
const School = require('./school');
const User = require('./user')


const RatingsSchema = new Schema({
  // add a limitation of the number rating to be 1-5
  rating: Number,
  comments: String,
  ratingDate: Date,
  user: {
    type:Schema.Types.ObjectId, 
    ref:'User'
  },
  school: {
    type:Schema.Types.ObjectId, 
    ref:'School'
  }
});

const Ratings = mongoose.model('Ratings', RatingsSchema);
module.exports = Ratings;