import React, { useState } from 'react'
import { Grid } from '@mui/material';
import { deletePost } from '../actions';
import { useDispatch } from 'react-redux';
import { CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardHeader,Avatar} from '@mui/material';
import moment from "moment"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./styles/Post.css"

const Post = ({post,index}) => {
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const HandleDelete = async()=>{
    setUser(JSON.parse(localStorage.getItem("profile")));
     await dispatch(deletePost(post._id));     
     window.location.pathname = "/"
  }
  let color = (user && user.result.username === post.username)? "#2e2087" : "black";

   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
        <>    
    <Grid item id={index}  lg={4}> 
    
    <Card style={{borderRadius: "20px"}} sx={{ maxWidth: 345 }} className="Cards">
    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: color }} aria-label="username">
           {post.username.substr(0,1)}
          </Avatar>
        }
        
        title= {post.username}
        subheader={moment(post.createdAt).fromNow()}
      />
    {/* <div>
      
     
    </div> */}
    <CardMedia
        component="img"
        height="140"
        image={post.selectedFile}
        alt={index}
      />

      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
         {post.title}
        </Typography> */}
        <p>
          {post.title}
        </p>
        <p>
        <br/>
        <em>
          {post.body.substr(0,20)}.... <Link style={{fontSize: "15px", color: "black"}} to={"/posts/"+ post._id}> <span style={{fontSize: "medium"}}>ReadMore</span> </Link>
        </em>
        </p>
      </CardContent>
      <CardActions>
            {(user && user.result.username === post.username)? <div className="but"><Button style={{color: "red"}} size="large" onClick={handleOpen}><DeleteOutlineIcon/></Button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <Button onClick={HandleDelete}>DELETE</Button>
          <Button onClick={handleClose}>CANCEL</Button>
        </Box>
      </Modal>
            <Button size="large" component={Link} to={"/posts/"+ post._id} ><CommentRoundedIcon/> {post.comments.length}</Button>
            </div> : <><Button size="large" ><CommentRoundedIcon/> {post.comments.length}</Button></>}        
      </CardActions>
       
      </Card>
    </Grid>
    
    </>
  )
}

export default Post;
