const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : String,
    password : String,
    createdAt : {
        type: Date,
        default: Date.now
    }
})
const userModel = mongoose.model("User", userSchema);

module.exports ={
    userModel
}