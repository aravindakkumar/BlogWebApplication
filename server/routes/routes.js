const express = require("express");
const router = express.Router();

const {posts, createPost,deletePost,updatePost, singlePost,createComment,deleteComment} = require("../controllers/controllers.js");
const {signUp, signIn} = require("../controllers/users.js")

router.get("/", posts);
router.post("/", createPost);
router.post("/del", deletePost)
router.post("/upd", updatePost)
router.post("/single", singlePost)
router.post("/ccom", createComment);
router.post("/dcom", deleteComment);

router.post("/signup", signUp);
router.post("/login", signIn);

module.exports = router