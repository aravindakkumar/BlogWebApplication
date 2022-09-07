const {postModel} = require("../models/posts.js")
const mongoose = require("mongoose");

const posts = async(req, res)=> {
    const data =await postModel.find({}).sort({createdAt : -1});
    res.status(200).json({data});
}

const createPost =async (req, res)=>{
   const {username,title, body,selectedFile} = req.body;

   const newPost = new postModel({
    title,
    body,
    username,
    selectedFile
   })

   try {
    await newPost.save(()=>{
        res.status(200).send("0");
    })

   } catch (error) {
        console.log(error);
        res.status(404).send("Error creating")
   }
}

const deletePost = async(req, res)=>{

    const _id = req.query.id;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.send("No Post with that ID")
    
    await postModel.findByIdAndRemove(_id);
    res.json({message : 'Post deleted'})
}

const updatePost =async (req, res)=>{
    const {id : _id} = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Post with that ID")
    const updatedPost = await postsModel.findByIdAndUpdate(_id, req.body, {new:true})
    res.json(updtaedPost)
}

const singlePost = async(req, res)=>{
    const _id = req.query.id;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Post with that ID")

    const data = await postModel.findById(_id)
    res.status(200).json({data})
}

const createComment = async(req, res)=>{
    const {id} = req.query;
    const {username, body} = req.body;
   
    const post = await postModel.findById(id);
    try {
        if(post){
        post.comments.unshift({
            username,
            body
        })
        await post.save(()=>{
            res.status(200).json({msg:0})

        });
        
        
    }
    else{
            throw new Error('Post not Found')
            }
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:1})
    }   
}

const deleteComment = async(req, res)=>{
    const {id, postId} = req.query;

    const post = await postModel.findById(postId)
    // console.log(post)
    if(post){
        const commentIndex = post.comments.findIndex(c=>c.id === id)
        post.comments.splice(commentIndex, 1);
        await post.save()
        res.status(200).json({msg:0})
    }
    else{
        res.status(400).json({msg:1})
    }

}


module.exports = {
    posts,
    createPost,
    deletePost,
    updatePost,
    singlePost,
    createComment,
    deleteComment
}