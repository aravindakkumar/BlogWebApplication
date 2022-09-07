const bcrypt = require('bcryptjs') 
const jwt = require("jsonwebtoken")
const { userModel } = require('../models/users')

 const signUp =async (req, res)=>{
    const {username, password} = req.body;
    try {
        const existingUSer = await userModel.find({username});
        if(existingUSer.length != 0) return res.json({msg : "user exists"});

        // const hashPwd = await bcrypt.hash(password, 12);
        const result = await userModel.create({
            username,
            password
        })
        const token = jwt.sign({
                username : result.username,
                id:result._id
            }, "test", {expiresIn : "1h"});
        
        res.status(200).json({result, token})
    } catch (error) {
        res.json({msg: "something went wrong"})
    }
}

 const signIn = async(req, res)=> {
    const {username, password} = req.body

    try {
        const existingUser = await userModel.findOne({username})
        if(existingUser.length === 0) return res.json({message : "No user"})


        // const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        // console.log(isPasswordCorrect);
        // if(!isPasswordCorrect) return res.json("Password wrong")
       const isPasswordCorrect = (existingUser.password === password)? true:false;
        const token = jwt.sign({username : existingUser.username, id:existingUser._id}, "test", {expiresIn : '1h'})
        res.status(200).json({result : existingUser, token})

    } catch (error) {
       console.log(error)
        
    }
}
module.exports ={
    signIn,
    signUp
}