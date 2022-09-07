import React, { useState } from 'react'
import { Avatar, Paper, Button, Grid, Typography, CssBaseline,Container, TextField,Link,Box } from '@mui/material';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate  } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {signIn} from "../actions/users.js"
import { createTheme, ThemeProvider } from '@mui/material/styles';

import "./styles/Auth.css"


const Login = () => {
     const navigate = useNavigate();
    const dispatch = useDispatch()
    const initialState = {
        username : '', password : ''
    }
    const [formData, setFormData] = useState(initialState)

const handleSubmit =async (e)=> {
        e.preventDefault()
        await dispatch(signIn(formData, navigate))
        
        setFormData(initialState)
       window.location.pathname = "/"
    }

    const handleChange = (e)=>{
        e.preventDefault()
        const {name, value} = e.target;
        setFormData(prevState=> (
            {...prevState, [name] : value } 
        ))
    }
  return (
    <div>
      <Box className="form22">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={{textAlign: "center"}}>
        
          <Typography component="h1" variant="h5">
          <Avatar style={{margin: "20px auto 10px"}}></Avatar>
            Login
        </Typography>
        </div>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={5}>                    
                    <Grid item xs={12} >
                    <TextField
                        name={"username"} onChange={handleChange} variant="outlined"
                        required fullWidth label={"username"}  type={"text"} 
                    ></TextField> 
                    </Grid>    

                    <Grid item xs={12} >
                    <TextField
                        name={"password"} onChange={handleChange} variant="outlined"
                        required fullWidth label={"password"}  type={"password"} 
                    ></TextField> 
                    </Grid>                 
                                     
                </Grid>     
                <Button style={{margin: "30px 0 20px"}} type='submit' fullWidth variant='contained' color='primary' className='submit'>
                        Login
                    </Button>
            <Grid container justifyContent="flex-end">
            <Grid item>
                <Link href="/register" variant="body2">
                      Dont Have an account? Sign Up
                </Link>
            </Grid>
            </Grid>
                   
        </Box>                  
            </Container>
   </Box>
    </div>
  )
}

export default Login