import React, { useEffect, useState } from 'react';
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


// import DeleteIcon from '@mui/material/DeleteIcon';
import CommentIcon from '@mui/icons-material/Comment';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { confirm } from "react-confirm-box";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import Blogs from './Blogs';

import { Box, TextField, } from '@mui/material';
import SingleCmnt from "./SingleCmnt";
import {authActions} from "../store";



const Verify = (props) => {


    const [body, setBody] = useState("");
    const [userToken, setUserToken] = useState(0);
    const [g, setG] = useState(0);
    const [isToken, setIsToken] = useState(false);
    const [minW, setMinW] = useState("700px");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let sessionInfo = useSelector(state => {
        return state;
    });



    let sendRequest = async () => {
        let res;
        let b;
        let data = {
            // blogID: blog.blogID,
            userID: sessionInfo.userID,
            body: body
        }
        console.log(data);
        try {
            res = await axios.post("http://localhost:5000/getToken", data);
            b = await res.data;
            setUserToken(b.token);
            // b = await res.data;
            // setBlogs(blog);
            // console.log(blogs);
        }
        catch (e) {
            console.log("backend problem from send request verify.js")
            alert("Sorry couldnt connect to backend!!!");
            navigate("/blogs");
        }
        return b;
    }

    useEffect(() =>{
        if(sessionInfo.isLoggedin === false){
            navigate("/auth");
            return;
        }
        if(sessionInfo.verify === 1){
            navigate("/blogs");
            return;
        }
        
        
    }, []);



    let sendSubmit = async () => {
        let res;
        let b;
        let data = {
            // blogID: blog.blogID,
            userID: sessionInfo.userID,
            token: body
        }
        console.log(data);
        try {
            res = await axios.post("http://localhost:5000/verify", data);
            b = await res.data;
        }
        catch (e) {
            console.log("backend problem from Verify.js")
            alert("something went wrong !!!");
        }
        return b;
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("user token is " + userToken + " body is " + Number(body));
        console.log(typeof(userToken),  typeof(body));
        if(userToken === Number(body)){
            sendSubmit().then((data) => {
                setBody("");
                setG(g + 1);
                if(data.msg === "success"){
                    alert("Your account has been verified");
                    dispatch(authActions.accountVerifyTrue());
                    navigate("/blogs");
                }
                else{
                    alert("your verification code mismatched");
                    setG(g + 1);
                    navigate("/blogs");
                }
            }).catch(e => {
                window.confirm(e);
            })
        }
        else{
            alert("your verification code mismatched");
            setG(g + 1);
            navigate("/blogs");
        }
    }


    const setValues = (e) => {

        setBody(e.target.value);

    }
    const getCode = () => {
        sendRequest().then((res, e)=>{
            setMinW("400px");
            setIsToken(true);
            console.log(e);
        }).catch(e =>{
            alert("Sorry something went wrong");
        });
    }


    return (
        <div>
            <Box display={"flex"}
                flexDirection="column"
                alignItems={"center"}
                justifyContent="center"
                boxShadow={"10px 10px 20px #ccc"}
                padding="3px"
                margin={"auto"}
                marginTop="10px"
                borderRadius={5}
                minWidth= {minW}

            >
               {isToken && <Typography variant='h4' sx={{ maxWidth: "400px" }}>we have sent an OTP on your email please insert the code below to Verify your account</Typography>}
                <br /><br />
                {isToken && <form onSubmit={handleSubmit} style={{ display: "flex" }}>
                    <TextField onChange={setValues} type="text" name="body" value={body} placeholder='Enter the code' margin='normal' required />
                    <Button sx={{ maxWidth: "100px" }} type="submit">Enter</Button>
                </form>}
                

                {isToken ? <Button variant='contained' color='warning' sx={{ maxWidth: minW }} onClick={getCode}>Click here to get verification Code again</Button> :<Button variant='contained' color='primary' sx={{ maxWidth: minW }} onClick={getCode}>Click here to get verification Code</Button>}
            </Box>
        </div>
    );
};

export default Verify;