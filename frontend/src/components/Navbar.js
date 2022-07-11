import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppBar, Button, Toolbar, Typography, Tabs, Tab} from "@mui/material"
import { Box } from '@mui/system'
import {Link} from "react-router-dom"
import  axios  from 'axios';
import { authActions } from '../store';



const Navbar = () => {

  const dispatch = useDispatch();

  let AppbarCssSetting = {
      background:'#2d8004'
  }
  let buttonColor = {
      color: "white"
  }
  let isLoggedIn = useSelector( state => {
    return state.isLoggedin;
  });
//   console.log("The is logg is " + isLoggedIn);


  const logout = async ()=>{
    await axios.get("http://localhost:5000/auth/logout");
    dispatch(authActions.logout());
  }



  return (
    <AppBar position='sticky' sx={AppbarCssSetting}>
        <Toolbar>
            <Typography variant='h3' >
                BlogVerse
            </Typography>
            { isLoggedIn && <Box display={"flex"} marginLeft="auto">
                <Tabs textColor='inherit' value={0}>
                    <Tab LinkComponent={Link} to={"/blogs"} label="NewsFeed"/>
                    <Tab LinkComponent={Link} to={"/myBlogs"} label="My blogs"/>
                </Tabs>
            </Box>}

            <Box display="flex" marginLeft={"auto"} >
                {!isLoggedIn && <Button LinkComponent={Link} to="/auth" sx={buttonColor}>
                    Login
                </Button>}
                { !isLoggedIn && <Button LinkComponent={Link} to="/auth" sx={buttonColor}>
                    Register
                </Button>}
            
                {isLoggedIn && <Button onClick={logout} sx={buttonColor}>
                    Logout
                </Button> }
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar