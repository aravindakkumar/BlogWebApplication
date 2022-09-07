const mongoose = require("mongoose");

//Schemas
const postSchema = mongoose.Schema({
    selectedFile : String,
    username: {
        type: String, 
        required : true
    },
    title : {
        type: String,
        required: true
    },
    body : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    comments : [{
        username : {
        type : String,
        },
        body : {
            type : String,
        },
        createdAt : {
            type : Date,
            default : Date.now
    }
    }],
    
    
})


//models
const postModel = mongoose.model("posts", postSchema);


module.exports ={
    postModel,
}