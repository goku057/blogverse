import { Box, Button, TextField, Typography} from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { authActions } from '../store';
import {useNavigate} from "react-router-dom"
import { confirm } from 'react-confirm-box';

const Land = () => {
    return (
        <div>
            <Typography variant='h2' 
            display={"flex"}
            justifyContent="center" 
            // height={"100%"}
            alignItems= "center"
            marginTop={15}
            >Welcome to BlogVerse</Typography>
            <Typography variant='h5' 
            display={"flex"}
            justifyContent="center" 
            height={"100%"}
            alignItems= "center"
            // marginLeft = "10px"
            >A place to share your thoughts!!!</Typography>
        
        </div>
    );
};

export default Land;