import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';

const Search = () => {
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
            let data = {
                search:sessionInfo.search
            }
            res = await axios.post("http://localhost:5000/search", data);
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
        console.log("My Blogs component deployed!!!");
    }, []);
    // console.log( blogs);
    return (
        <div>
            <h1>{blogs.length ? blogs.map( (val, index) => (<BlogCard key={val.id} blogID = {val.id} title={val.title} body={val.body} cat={val.cat} postTime={val.post_time} username={val.username} userID={val.user_id} />)) : <div style={{display:"flex", minHeight:"300px", alignContent:"center", flexDirection:"row", justifyContent:"center", alignItems:"center", textAlign:"center"}}>We have found no posts that matches with your search</div>}</h1>
        </div>
    );
};

export default Search;