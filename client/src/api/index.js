import axios from 'axios';
const API = axios.create({baseURL : "http://localhost:5000/api/posts"});

export const fetchPosts = ()=> API.get("/");
export const createPosts = (post)=> API.post("/", post);
export const deletePost = (id)=> API.post("/del?id=" + id);
export const singlePost = (id)=> API.post("/single?id=" + id)

export const createComment = (id, post)=> API.post("/ccom?id="+id, post);
export const deleteComment = (id, postId) => API.post(`/dcom?id=${id}&postId=${postId}`);

export const signUp = (data)=> API.post("/signup", data);
export const signIn = (data)=> API.post("/login", data);