let mongoose = require("mongoose");
//not sure about the localhost
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/PROJECT1--sCool", {useMongoClient: true});



module.exports = {
    School : require("./school.js"),
    ratings : require("./ratings.js"),
    user: require('./user.js')
}