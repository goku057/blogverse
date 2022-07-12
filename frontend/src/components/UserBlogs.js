// import React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';

const UserBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    let sessionInfo = useSelector( state => {
        return state;
      });
    
      
    
    const getBlogs = async ()=>{
        let res;
        let blog;
        try{
            res = await axios.post("http://localhost:5000/blog/showMyBlogs", {userID:sessionInfo.userID});
            blog = await res.data;
            // setBlogs(blog);
            // console.log(blogs);
            // console.log("in user blog");
            // console.log(blog);
        }
        catch(e){
            console.log("backend problem")
        }
        return blog;
    }
    // useEffect( ()=>{
    //     if(sessionInfo.isLoggedin === false){
    //         navigate("/auth");
    //     }
    //     else{
    //         // console.log("ggg");
    //         setBlogs("gg");
    //         // console.log(blogs);
    //     }
    //     setBlogs([1, 2, 3]);

    // },
    // []);
    useEffect(() => {

        if(sessionInfo.valid === false){
            navigate("/auth");
            return;
        }

        getBlogs().then( data => setBlogs(data)).then(() =>{
            // console.log("databse er kam shesh");
        });
        // setBlogs([1,2 ,3]);
        console.log("Blogs component deployed!!!");
    }, []);
    // console.log( blogs);
    return (
        <div>
            <h1>{blogs ? blogs.map( (val, index) => (<BlogCard key={val.id} share={val.share} postUserID={val.user_id} blogID = {val.id} title={val.title} body={val.body} cat={val.cat} postTime={val.post_time} username={val.username} />)) : "No posts available"}</h1>
        </div>
    );
};

export default UserBlogs;