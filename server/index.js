//npm packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

//user-defined packages
const {NotFound} = require("./middleware/NotFound.js");
const routerController = require("./routes/routes.js")

const app = express();
app.use(express.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


//Main Route
app.use("/api/posts/", routerController);

const start = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log("MONGODB CONNECTED");
    })
    .catch(err=> console.log(err))
    .then(()=> {
        app.listen(process.env.PORT || 5000, ()=> console.log(`SERVER STARTED AT PORT ${process.env.PORT}`));
    })
}

//404 Route not found
app.use(NotFound);

start();