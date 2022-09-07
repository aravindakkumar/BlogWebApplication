import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { singlePost,fetchPosts,createComment ,deleteComment} from '../actions/index.js';
import { deletePost } from '../actions/index.js';
import {TextField,Paper,Button, Typography,Box} from "@mui/material"
import "./styles/SinglePost.css"
import moment from "moment"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {CircularProgress} from '@mui/material';
import Footer from './Footer.js';

const SinglePost = () => {
    const [commentBody, setCommentBody] = useState({username: "", body: ""})

    const [postId, setPostId] = useState(useParams().postId)
    const dispatch = useDispatch();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    
    useEffect(()=>{
      dispatch(fetchPosts())
    },[dispatch])
    
    const posts = useSelector(state=>state.fetch)
    let post = {}
    if(posts.length !== 0){
      post = posts.data.filter(s=> s._id === postId)
    }
const HandleDelete = async()=>{
     await dispatch(deletePost(postId));
     window.location.pathname = "/"
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await dispatch(createComment(postId, commentBody));
    window.location.pathname = "/posts/"+ postId;
    console.log(post)
  }

  const hanleDeleteComment =async (id)=>{
    await dispatch(deleteComment(id, postId));
    window.location.pathname = "/posts/"+ postId;
  }
  return (<>
    <div>
    {(posts.length !== 0)? <>
    <div className="post">
    <img src={post[0].selectedFile}></img>
    <div className="text">
    <div className='postedBy'>
    <Typography className="actualText">Posted By {post[0].username}</Typography>
    {(user && user.result.username === post[0].username) && <><button size="large" style={{cursor:"pointer",borderRadius: "10px",color: "white",backgroundColor: "red"}} onClick={HandleDelete}><DeleteOutlineIcon/></button></>}

    <Typography className="actualText">Posted {moment(post[0].createdAt).fromNow()}</Typography>
    </div>
      <div className='content'>
        <h1>{post[0].title}</h1>
        <p>{post[0].body}</p>
      </div>
      </div>
      </div>
    </>:
    <>
      <CircularProgress/>
    </>}
        
    </div>

    <div>
       {(user) && <>
       <div style={{textAlign: "center", marginBottom: "30px"}}>
    <h1 className='h1'>Comment Anything!!!</h1></div>
        <Box className="comments">
        <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit}>         
        
          <TextField style={{margin: "5px"}} name='body' variant='outlined' label='body' fullWidth
          value={commentBody.body} onChange={(e)=> setCommentBody({...commentBody, body : e.target.value, username:user.result.username})}></TextField>

          <Button style={{margin:"20px 0"}} variant="contained" color='primary'
          size="large" type="submit" fullWidth
          >submit</Button>
        
        </form>
      </Box></>}
      {(!user) && <h1 className="h1111">Please Sign In first to comment    (●'◡'●)</h1>}
    </div>

    <div>
    
      {(posts.length !== 0)? (post[0].comments.map(c=>{
        return(
          <div className="commentss">
          <div className="onet h1" style={{color: "black", fontWeight:"300"}}>
            <p>{c.username}</p>
            <p>{moment(c.createdAt).fromNow()}</p>
          </div>
         
         <div className="twot h1" style={{color: "black", fontWeight:"300"}}>
           <p>{c.body} </p>
         </div>

          {(user && user.result.username === c.username) && 
          <span><button className='btn' onClick={()=>hanleDeleteComment(c._id)}><DeleteOutlineIcon/></button></span>
          }
          
          </div>

        )
      })):
      <><CircularProgress/></>
      }
    </div>
    <Footer/>
    </>
  )
}

export default SinglePost
