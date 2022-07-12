import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Button, Toolbar, Typography, Tabs, Tab, TextField } from "@mui/material"
import { Box } from '@mui/system'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { authActions } from '../store';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let sessionInfo = useSelector(state => {
        return state;
    });
    let AppbarCssSetting = {
        background: '#2d8004'
    }
    let buttonColor = {
        color: "white"
    }
    let isLoggedIn = useSelector(state => {
        return state.isLoggedin;
    });
    //   console.log("The is logg is " + isLoggedIn);

    const [searchInput, setSearchInput] = useState("");
    const logout = async () => {
        await axios.get("http://localhost:5000/auth/logout");
        dispatch(authActions.logout());
    }

    const [finalSearch, setFinalSearch] = useState(0);    

    const handleSearchSubmit = (e)=>{
        e.preventDefault();
        let data = {
            search: searchInput
        }
        dispatch(authActions.setSearchResult(data));
        setSearchInput("");
        setFinalSearch(finalSearch + 1);
        navigate("/dummy")
        // window.location.reload();
        
    }
    const changeSearchInput = (e)=>{
        setSearchInput(e.target.value);
    }
    
    const [focusVal, setFocusVal] = useState(0);
    const changeVal = (e)=>{
        if(e.target.text == "NewsFeed"){
            setFocusVal(0);
        }
        else if(e.target.text == "Create Post"){
            setFocusVal(1);
        }
        else{
            setFocusVal(0);
        }
    }


    // useEffect(()=>{

    // },[finalSearch]);



    return (
        <AppBar position='sticky' sx={AppbarCssSetting}>
            <Toolbar style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <Typography  variant='h3' >
                    BlogVerse
                </Typography>
                {isLoggedIn && <form onSubmit={handleSearchSubmit} style={{display:"flex", alignContent:"center"}}>
                    <TextField name="search" value={searchInput}
                    onChange={changeSearchInput}
                     sx={{background:"lightgrey"}}   placeholder="Search Blogs" required/>
                    <Button type='submit' sx={{background:"darkgrey", marginLeft:"3px"}}>Go</Button>
                </form>}
                <div style={{display: "flex"}}>
                {isLoggedIn && <Box display={"flex"} marginLeft="auto">
                <Tabs TabIndicatorProps={{style: {background:'#41A317'}}} textColor='inherit' value={focusVal} onClick={changeVal}>
                    <Tab LinkComponent={Link} to={"/blogs"}  label="NewsFeed" />
                    <Tab LinkComponent={Link} to={"/blogs/add"}  label="Create Post" />
                </Tabs>
            </Box>}

            <Box display="flex" marginLeft={"auto"} >
                {!isLoggedIn && <Button LinkComponent={Link} to="/auth" sx={buttonColor}>
                    Login
                </Button>}
                

                {isLoggedIn && <div style={{ display: "flex", color:"white" }}>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                    <Typography variant='h6' sx={{color:"white"}}><span style={{fontSize:"15px"}}>Welcome</span> {sessionInfo.userName} <ArrowDropDownIcon/> </Typography>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}  ><Tab LinkComponent={Link} to={"/myBlogs"} label="My blogs" /></MenuItem>
                        <MenuItem onClick={handleClose}><Button style={{color:"#A9A9A9", marginLeft:"7px"}} LinkComponent={Link} to="/auth" onClick={logout} sx={buttonColor}>
                        Logout
                    </Button></MenuItem>
                    </Menu>




                </div>}
            </Box>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar