import React, {useEffect, useState} from 'react';
import { Box, Button, TextareaAutosize, TextField, Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BlogForm from './BlogForm';


const AddBlog = (props) => {


    const navigate = useNavigate();

    let sessionInfo = useSelector( state => {
        return state;
      });
      
    useEffect( ()=>{
        if(sessionInfo.isLoggedin === false){
            navigate("/auth");
            return;
        }
        if(sessionInfo.verified === 0){
            navigate("/verify");
            return;
        }
    }, []);

    return (
        <div>
            <BlogForm actionType="create" title="" body="" cat=""/>
        </div>
    );
};

export default AddBlog;