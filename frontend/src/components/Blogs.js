import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    // console.log(props.params);
    let sessionInfo = useSelector( state => {
        return state;
      });
    
      
    
    const getBlogs = async ()=>{
        let res;
        let blog;
        try{
            res = await axios.get("http://localhost:5000/blog/newsfeed");
            blog = await res.data;
            // setBlogs(blog);
            // console.log(blogs);
        }
        catch(e){
            console.log("backend problem")
        }
        return blog;
    }
   
    useEffect(() => {

        if(sessionInfo.isLoggedin === false){
            navigate("/auth");
            return;
        }
        if(sessionInfo.verified === 0){
            navigate("/verify");
            return;
        }
        getBlogs().then( data => setBlogs(data)).then(() =>{
            // console.log("databse er kam shesh");
        });
        // setBlogs([1,2 ,3]);
        console.log(blogs);
        console.log("My Blogs component deployed!!!");
    }, []);
    // console.log( blogs);
    return (
        <div>
            <h1>{blogs.length ? blogs.map( (val, index) => (<BlogCard key={val.id} blogID = {val.id} title={val.title} body={val.body} cat={val.cat} postTime={val.post_time} username={val.username} userID={val.user_id} />)) : "No posts available"}</h1>
        </div>
    );
};

export default Blogs;