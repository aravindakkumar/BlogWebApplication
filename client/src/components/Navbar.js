import React, {useEffect, useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { logout } from '../actions/users';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "./styles/NavBar.css"

const Navbar = () => {
  const dispatch = useDispatch();
 const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [summa ,setSumma] = useState(false)
  // let user={};
  // let token = "";
  // if(data.length!==0) {
  //     user = data.result;
  //     token = data.token;
  // };
  useEffect(()=> {
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[summa])

    const HandleLogout = async(e)=>{  
      await dispatch(logout())
     setUser(null)
    setSumma(prev=> (!prev))
        
      window.location.pathname = "/"
    }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Container  maxWidth="xl">
     <AppBar position="static" className='navbar'>
     
        <Toolbar disableGutters className="flex-loginsign">
        <div>

        </div>
      <div>
          <Typography
            variant=""
            noWrap
            component="a"
            href="/"
            className="link"
            >
            Stories
            
          </Typography>
      </div>

      <div >
          {user? <>
              {/* <Button variant="outlined" color="secondary" onClick={HandleLogout}>logout</Button> 
              <h1>{user.result.username}</h1>   */}
      <Button
        style={{fontSize: "60px"}}
        onClick={handleClick}
      >
       <Avatar style={{backgroundColor:"white", padding:"20px", color:"black"}} aria-label="username">
           {user.result.username.substr(0,1)}
          </Avatar>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem >Username : {user.result.username}</MenuItem>
        <MenuItem onClick={HandleLogout}>Logout</MenuItem>
      </Menu>
              
          </> :<>
            <Button className="button"  href='/login'><span>Login</span></Button>   
          <Button className="button"  href='/register'><span>SIGN UP</span></Button>         
          </>}
      </div>

      </Toolbar>
    </AppBar>
    </Container>
    

      

     
          
          

          
       
    </>
  )}
  
export default Navbar;
