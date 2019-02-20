let mongoose = require("mongoose");
//not sure about the localhost
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/PROJECT1--sCool", { useNewUrlParser: true });



module.exports = {
    Schools: require("./school.js"),
    Ratings: require("./ratings.js"),
    Users: require('./user.js')
}