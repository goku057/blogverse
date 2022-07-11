const authModel = require("../models/authModel");
const blogModel = require("../models/blogModel");

const createBlog = async (req, res) =>{
    let userID = req.body.userID;
    let title = req.body.title;
    let body = req.body.body;
    let cat = req.body.cat;
    let result;
    try{
        result = await blogModel.createBlog(userID, title, body, cat);
    }
    catch(e){
        console.log("db error in blogcontroller createblog ");
        res.status(200).json({msg:"db error"});
        return;
    }
    if(result){
        res.status(200).json({msg : "success"});
    }
    else{
        res.status(200).json({msg : "failed"});
    }
}


const getAllBlogs = async(req, res) =>{
    let result;
    try{
        result = blogModel.getBlogs();
        res.status(200).json(result);
    }
    catch(e){
        console.log("db error on blog controller getAllBlogs");
    }
}

const showUserBlog = async(req, res) =>{
    let userID = req.query.userID;
    let result;
    try{
        result = await blogModel.getUserBlogs(userID);
        res.status(200).json(result);
    }
    catch(e){
        console.log("DB error in blog controller show user blog ");
        res.status(200).json({msg:"error"});
    }
    
}

const updateBlog = async (req, res) =>{
    let blogID = req.body.blogID;
    let title = req.body.title;
    let body = req.body.body;
    let cat = req.body.cat;
    let result;
    try{
        result = await blogModel.updateBlog(blogID, title, body, cat);
    }
    catch(e){
        console.log("db error in blogcontroller updateblog ");
        res.status(200).json({msg:"db error"});
        return;
    }
    if(result){
        res.status(200).json({msg : "success"});
    }
    else{
        res.status(200).json({msg : "failed"});
    }
}

const deleteBlog = async(req, res) =>{
    let blogID = req.body.blogID;
    let result;
    try{
        result = await blogModel.deleteBlog(blogID);
        res.status(200).json({msg: "deleted success"});
    }
    catch(e){
        console.log("DB error in blog controller show user blog ");
        res.status(200).json({msg:"error"});
    }
    
}

const shareBlog = async (req, res) =>{
    let blogID = req.body.blogID;
    try{
        result = await blogModel.shareBlog(blogID);
        res.status(200).json({msg:"share success"});
    }
    catch(e){
        console.log("DB error in blog controiller shareblog ");
        res.status(200).json({msg: "failed"});
    }
}


module.exports = {
    createBlog,
    getAllBlogs,
    showUserBlog,
    updateBlog,
    deleteBlog,
    shareBlog
}