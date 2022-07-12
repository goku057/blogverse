import React, {useState} from 'react';
import { Box, Button, TextareaAutosize, TextField, Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BlogForm from './BlogForm';


const AddBlog = (props) => {

    return (
        <div>
            <BlogForm actionType="create" title="" body="" cat=""/>
        </div>
    );
};

export default AddBlog;