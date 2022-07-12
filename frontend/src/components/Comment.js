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
import SingleCmnt from "./SingleCmnt"


const Comment = (props) => {

    let blog = props;

    let sessionInfo = useSelector( state => {
        return state;
      });
    
    const [body, setBody] = useState("");
    const [cmnts, setCmnts] = useState();
    let navigate = useNavigate();
    const [g, setG] = useState(0);

    let getPostComments = async ()=>{
        let res;
        let b;
        let data = {
            blogID: blog.blogID,
            userID: sessionInfo.userID,
            body: body
        }
        console.log(data);
        try{
            res = await axios.post("http://localhost:5000/comment/getComments", {blogID:blog.blogID});
            b = await res.data;
            // setBlogs(blog);
            // console.log(b);
        }
        catch(e){
            console.log("backend problem")
        }
        return b;
    }

    useEffect(()=>{
        getPostComments().then( data => setCmnts(data)).then(() =>{
            console.log("comment component deployed");
        });
    }, [g]);







    let sendRequest = async ()=>{
        let res;
        // let b;
        let data = {
            blogID: blog.blogID,
            userID: sessionInfo.userID,
            body: body
        }
        console.log(data);
        try{
            res = await axios.post("http://localhost:5000/comment/create", data);
            // b = await res.data;
            // setBlogs(blog);
            // console.log(blogs);
        }
        catch(e){
            console.log("backend problem")
        }
        // return b;
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        sendRequest().then(()=>{
            // window.location.reload();
            // navigate("/blogInfo/" + blog.blogID);
            setBody("");
            setG(g + 1);
        }).catch(e =>{
            window.confirm(e);
        })
    }


    const setValues = (e) => {
        
        setBody(e.target.value);
        
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
                minWidth="400px"

            >
                <form onSubmit={handleSubmit} style={{ display: "flex" }}>
                    <TextField onChange={setValues} name="body"  value={body} placeholder='Comment something!!!' margin='normal' required />
                    <Button sx={{ maxWidth: "100px" }} type="submit">Comment</Button>
                </form>
            </Box>
            {cmnts ? cmnts.map( val => <SingleCmnt cmntBody={val.body} username={val.username} postTime={val.post_time} />) : "No comments have been done"}
        </div>
    );
};

export default Comment;