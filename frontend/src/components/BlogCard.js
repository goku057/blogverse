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
import Comment from './Comment';
import Moment from 'moment';

const BlogCard = (props) => {
    let blog = props;
    let sessionInfo = useSelector(state => {
        return state;
    });
    const [myBlog, setMyBlog] = useState(false);
    const [cmntCount, setCmntCount] = useState(0);
    const navigate = useNavigate();


    let styl = {
        display: "flex",
        alignItems: "center",
        justifyContents: "center",
        flexDirection:"column"
    }
    let getCmntCount = async ()=>{
        let res;
        let b;
        try{
            res = await axios.post("http://localhost:5000/comment/commentCount", {blogID: blog.blogID});
            b = await res.data;
            // setBlogs(blog);
            // console.log(blogs);
        }
        catch(e){
            console.log("backend problem")
        }
        return b;
    }
    useEffect(() => {
        if (blog.postUserID === sessionInfo.userID ) {
            setMyBlog(true);
        }
        else {
            setMyBlog(false);
        }
        getCmntCount().then( data => setCmntCount(data[0].comment_count));
        // console.log("blog is is" + blog.blogID);

    }, []);
    // const navigate = useNavigate();
    const edit = (e) =>{
        navigate("/blogs/edit/" + blog.blogID)
    }

    const delet = async () => {
        let a;
        a = window.confirm("Are your sure you want to delete this item");
        if(a === true){
            let data = {
                userID : sessionInfo.userID,
                blogID : blog.blogID
            }
            console.log(data);
            let result;
            try{
                result = await axios.post("http://localhost:5000/blog/deleteBlog", data)
                if(result){
                    alert("Your post has been deleted");
                    // navigate("/blogs");
                    blog.upd();
                }
                else{
                    alert("Could not delete post");
                }
            }
            catch(e){
                console.log("DB error in blog card delet function");
            }
        }
    }


    const goDetails = ()=>{
        navigate("/blogInfo/" + blog.blogID);
    }


    const shar = async ()=>{
        
        if(blog.share === 1){
            alert("You have already shared this post!!!");
            return;
        }
        let a;
        a = window.confirm("Are your sure you want to share this item");
        if(a === true){
            let data = {
                userID : sessionInfo.userID,
                blogID : blog.blogID
            }
            console.log(data);
            let result;
            try{
                result = await axios.post("http://localhost:5000/blog/shareBlog", data)
                if(result){
                    alert("Your post has been shared!!!");
                    navigate("/blogs");
                }
                else{
                    alert("Could not delete post");
                }
            }
            catch(e){
                console.log("DB error in blog card shar function");
            }
        }
    }




    return (
        <div style={styl}>
            <Card sx={{
                width: "40%",
                margin: "auto",
                
                boxShadow: "10px 10px 20px #ccc",
                padding:"3px",
                marginTop:"10px",
                borderRadius:"5px"
            }}>
                <CardHeader

                    title={blog.title}
                    subheader={Moment(blog.postTime).format("LLL")}
                />

                <CardContent>
                {!blog.actionType && <Typography variant="body2" color="text.secondary">
                          {blog.body.slice(0, 100)} <span onClick={goDetails} 

                        //   onMouseOver={this.style.color='#0F0'}
                        //     onMouseOut={this.style.color='#00F'}
                          style={{cursor:"pointer", color:"green"}}>...read more</span>
                    </Typography>
                }
                {blog.actionType && <Typography variant="body2" color="text.secondary">
                          {blog.body} 
                    </Typography>
                }

                <Typography marginTop={"5px"} display="flex" alignContent={"center"} justifyContent={"left"} variant="body2" color="text.secondary">
                        Category: {blog.cat}
                    </Typography>
                <Typography display="flex" marginTop={"5px"} alignContent={"center"} justifyContent={"left"} variant="body2" color="text.secondary">
                        posted by: {blog.username}
                </Typography>
            
                </CardContent>
                <CardActions sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                    <IconButton aria-label="share">
                        <CommentIcon /> <span style={{fontSize:"medium", marginLeft:"3px"}}> {cmntCount}</span>
                    </IconButton>
                    {myBlog &&
                        <div style={{}}>
                        <Button onClick={edit}><EditIcon sx={{ color: "blue" }} /></Button>    
                        <Button onClick={delet}><DeleteForeverIcon sx={{ color: "red" }} /></Button> 
                        <Button onClick={shar}><ShareIcon/></Button>
                        </div>
                    }
                </CardActions>
                    
            </Card>
            { blog.blogInfo && <Comment  blogID={blog.blogID} />}
        </div>
    );
};

export default BlogCard;