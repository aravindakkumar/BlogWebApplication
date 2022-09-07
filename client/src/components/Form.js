import React,{useState} from 'react'
import FileBase from 'react-file-base64'
import {TextField, Button, Paper} from '@mui/material'
import {useDispatch, useSelector} from "react-redux"
import { createPosts } from '../actions'
import SendIcon from '@mui/icons-material/Send';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import "./styles/Form.css"

const Form = () => {
    const [postData, setPostData] = useState({
    title : '', body : '',username:'',selectedFile:''
  })
  const dispatch = useDispatch();
  const {data} = useSelector(state=> state.create);
  const authData = JSON.parse(localStorage.getItem('profile'))

    const handleSubmit = async(e)=> {
      e.preventDefault()
      setOp(!op);
    await dispatch(createPosts({...postData, username: authData.result.username}))
        window.location.pathname ="/"

    }
    const [op, setOp] = React.useState(false);

    
    
  return (
    
    <>
    
    {(authData) && <>
    <div className='form3'>        
        <h2>Post Anything You Want!!!</h2>
        <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit}>
          
        
          <TextField  style={{margin: "30px 0"}} multiline maxRows={4} name='title' variant='outlined' label='Title' fullWidth
          value={postData.title} onChange={(e)=> setPostData({...postData, title : e.target.value})}></TextField>

          <TextField style={{margin: "30px 0"}} multiline maxRows={4} name='body' variant='outlined' label='Body' fullWidth
          value={postData.body} onChange={(e)=> setPostData({...postData, body : e.target.value})}></TextField>
          
          <div className='fileInput'>
            <FileBase type="file" multiple={false}
            onDone={({base64}) => setPostData({...postData, selectedFile : base64})}></FileBase>             
          </div>

          <Button className='buttonSubmit' variant="contained" color='primary'
          size="large" type="submit" fullWidth
          >submit &nbsp;<SendIcon/> </Button>

        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={op}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        </form>
        </div>

   </>}
      {(!authData) && <div className="form3" style={{color:"red",fontSize: "20px"}}>Please Sign In to post and comment &nbsp; (●'◡'●)</div>}
     
    </>
    
  )
  
}

export default Form
