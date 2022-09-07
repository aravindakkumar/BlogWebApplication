import React, { useEffect, useState } from 'react'
import {Box,Container} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from "react-redux"
import { fetchPosts } from '../actions'
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

import Post from './Post';

const Posts = () => {
  const dispatch =useDispatch();
  const [reload, setReload] = useState(false);
  const posts = useSelector(state=> state.fetch)
  const {data} = posts;
  useEffect(()=>{
    dispatch(fetchPosts())
  }, [dispatch, reload])

    const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
     <Box>
     <Container maxWidth="xl">
     <h1 className='h1'>Recent Posts</h1>
      <Grid container spacing={7}>
        {(posts.length===0 )? (<div >
      <CircularProgress style={{textAlign: "left", color: "white"}}/>
        </div>): (data.map((post, index)=> {
          return(           
            <>             
                <Post post={post} index={index}/>              
              </>  
       )
        }))}
            

      </Grid>
     </Container>
   </Box>
  )
}

export default Posts
