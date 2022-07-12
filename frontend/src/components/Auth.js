import { Box, Button, TextField, Typography} from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { authActions } from '../store';
import {useNavigate} from "react-router-dom"
import { confirm } from 'react-confirm-box';

const Auth = () => {
    
    let sessionInfo = useSelector( state => {
        return state;
      });
    console.log(sessionInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignup, setIsSignup] =  useState(false);
    const [inputs, setInputs] = useState({
        username:"",
        email : "",
        pass : ""
    });
    const handleChange = e=>{
        setInputs(prevInputs => ({
            ...prevInputs,
            [e.target.name] : e.target.value
        }))
    }

    const sendReq = async (type = "login") =>{
        let data = {
            username: inputs.username,
            email: inputs.email,
            pass: inputs.pass
        };
        let response;
        let r;
        try{
            response = await axios.post(`http://localhost:5000/auth/${type}`, data);
            r = await response.data;
        }
        catch(e){
            console.log("failed to connect to backend");
        }
        return r;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isSignup){
            sendReq("signup").then((data) => {
                if(data.valid === true){
                    
                    dispatch(authActions.login(data))
                    navigate("/blogs");
                }
                else{
                    console.log("couldnt login");
                }
                console.log(data);
        });
        }
        else{
            sendReq("login").then((data) => {
                if(data.valid === true){
                    
                    dispatch(authActions.login(data))
                    navigate("/blogs");
                }
                else{
                    console.log("couldnt login");
                    // alert("Couldnt login");
                    window.alert("Your username and pass is mismatched");
                }
                console.log(data);
        });
            ;
        }

        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box display={"flex"} 
                    flexDirection="column" 
                    alignItems={"center"} 
                    justifyContent="center"
                    boxShadow={"10px 10px 20px #ccc"}
                    padding="3px"
                    margin={"auto"}
                    marginTop="10px"
                    borderRadius={5}
                    maxWidth="400px"
                
                >
                    <Typography variant='h3' padding={3} textAlign="center"> { isSignup ? "Sign Up":"Login"}</Typography>
                    <TextField onChange={handleChange} name="username" value={inputs.username} placeholder='user name' margin='normal' required/>

                    { isSignup && <TextField onChange={handleChange} name="email" value={inputs.email} placeholder='email' type={"email"} margin='normal' required/>}

                    <TextField onChange={handleChange} name="pass" value={inputs.pass} placeholder='password' type={"password"} margin='normal' required />

                    <Button type='submit' variant='contained' color='success'>Submit</Button>

                    <Button onClick={()=>setIsSignup(!isSignup)}>{isSignup ? "Click here to login" :"Dont have an account? Sign UP"}</Button>
                </Box>
            </form>
        </div>
    );
};

export default Auth;