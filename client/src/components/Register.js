import React, { useState } from 'react'
import { Avatar, Paper, Button, Grid, Typography, CssBaseline,Container, TextField,Link,Box } from '@mui/material';
import { useNavigate  } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {signIn,signUp} from "../actions/users.js"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./styles/Auth.css"



const Register = () => {
const theme = createTheme();

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const initialState = {
        username : '', password : ''
    }
    const [formData, setFormData] = useState(initialState)

    const handleSubmit =async (e)=> {
        e.preventDefault()
        await dispatch(signUp(formData, navigate))
        
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
    <>
   <Box className="form22">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={{textAlign: "center"}}>
        
          <Typography component="h1" variant="h5">
          <Avatar style={{margin: "20px auto 10px"}}></Avatar>
            Sign up
        </Typography>
        </div>
        <Box
         sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >          
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
                        Sign Up
                    </Button>                    
            <Grid container justifyContent="flex-end">
            <Grid item>
                <Link href="/login" variant="body2">
                      Already have an account? Sign in
                </Link>
            </Grid>
            </Grid>
                   
        </Box>
                
            </Box>
            </Container>
   </Box>
       </>
  )
}

export default Register
