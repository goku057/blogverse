import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import BlogCard from './BlogCard';


const BlogInfo = () => {

    const {pid} = useParams();
    console.log(pid);
    const [blogs, setBlogs] = useState(false);
    
    let sessionInfo = useSelector( state => {
        return state;
      });
      const getBlogs = async ()=>{
        let res;
        let blog;
        try{
            res = await axios.post("http://localhost:5000/blog/getBlog", {blogID: pid});
            blog = await res.data;
            // setBlogs(blog);
            // console.log(blogs);
        }
        catch(e){
            console.log("backend problem")
        }
        return blog;
    }
    const navigate = useNavigate();
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
        console.log("edit blogs component deployed!!!");

    }, []);

    


    return (
        <div>
        {blogs ? blogs.map( (val, index) => (<BlogCard blogInfo="true" actionType="blogInfo" postUserID={val.user_id} key={val.id} blogID = {val.id} title={val.title} body={val.body} cat={val.cat} postTime={val.post_time} username={val.username} />)) : "No posts available"}
        </div>
    );
};

export default BlogInfo;