require("dotenv").config({path : "../.env"})
const {productsModel} = require("../models/products.js")
const data = require("./data.js")
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Startedsss"))
.then(async ()=> {
    try {
        await productsModel.deleteMany();
        await productsModel.create(data);
        console.log("Success!!!");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(-1);

    }
})