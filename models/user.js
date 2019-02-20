const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// user schema and model
const UserSchema = new Schema({
    userName: String,
    password: String,
    role: String,
    createdUserDate: Date,
    avatar: String
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
