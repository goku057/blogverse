import React, {useEffect, useState} from 'react';
import { Box, Button, TextareaAutosize, TextField, Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const BlogForm = (props) => {
    let blog = props;
    const [inputs, setInputs] = useState({
        actionType: blog.actionType,
        title:blog.title,
        body : blog.body,
        cat : blog.cat
    });
    const [isUpdate, setIsUpdate] = useState(false);
    
    const navigate = useNavigate();

    const handleChange = e=>{
        setInputs(prevInputs => ({
            ...prevInputs,
            [e.target.name] : e.target.value
        }))
    }

    let sessionInfo = useSelector( state => {
        return state;
      });
    
    const sendReq = async () =>{
        let data = {
            userID : sessionInfo.userID, 
            title : inputs.title, 
            body : inputs.body, 
            cat : inputs.cat,
            blogID : blog.blogID
        };
        let response;
        let r;
        try{
            response = await axios.post(`http://localhost:5000/blog/${inputs.actionType}`, data);
            console.log("the url is :" + `http://localhost:5000/blog/${inputs.actionType}`);
            console.log(data);
            r = await response.data;
        }
        catch(e){
            console.log("failed to connect to backend");
        }
        return r;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let result = undefined;
        try{        
           result = await sendReq();
        }
        catch(e){
            console.log("DB error for submission")
        }
        if(result){
            console.log("submitted");
            navigate("/myBlogs");
        }
        
    }

    useEffect( ()=> {
        if(sessionInfo.isLoggedin === false){
            navigate("/auth");
            return;
        }
        if(blog.actionType === "updateBlog"){
            setIsUpdate(true);
        }
        else{
            setIsUpdate(false);
        }
    }, []);

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
            <Typography variant='h3' padding={3} textAlign="center"> { isUpdate ? "Update your post" : "Create a new post"}</Typography>
            <TextField onChange={handleChange} name="title" value={inputs.title} placeholder='Enter title' margin='normal' required/>

            <TextField 
            onChange={handleChange} name="cat" value={inputs.cat} 
            placeholder='Write your post category or tags' type={"text"} margin='normal' required />

            <TextareaAutosize
            
                aria-label="maximum height"
                style={{width:"240px", margin:"10px", minHeight:"150px", resize:"none"}}
                onChange={handleChange} name="body" value={inputs.body} placeholder='Your thoughts' type={"text"} margin='normal' required/>

            <Button type='submit' variant='contained' color='success'>Submit</Button>

            <Button> </Button>
        </Box>
    </form>
        </div>
    );
};

export default BlogForm;