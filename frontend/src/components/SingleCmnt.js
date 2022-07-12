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
import { useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { confirm } from "react-confirm-box";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import Blogs from './Blogs';

import { Box, TextField, } from '@mui/material';

const SingleCmnt = (props) => {
    let cmnt = props;
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
                minWidth="400px"
            >
                <div style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
                    <Typography>Commented By:{cmnt.username}</Typography>
                    <Typography variant='p' padding={3} textAlign="center"> {cmnt.cmntBody}</Typography>
                    <Typography variant='p' padding={0} textAlign="center">commented on {cmnt.postTime}</Typography>
                </div>
            </Box>
        </div>
    );
};

export default SingleCmnt;