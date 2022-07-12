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
        result = await blogModel.getBlogs();
        res.status(200).json(result);
    }
    catch(e){
        console.log("db error on blog controller getAllBlogs");
    }
}

const showUserBlog = async(req, res) =>{
    let userID = req.body.userID;
    let result;
    try{
        result = await blogModel.getUserBlogs(userID);
        res.status(200).json(result);
        // console.log(result);
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
        // console.log(e);
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
        console.log("DB error in blog controller delete blog ");
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

const getBlogDetails = async(req, res) =>{
    let blogID = req.body.blogID;
    let result;
    try{
        result = await blogModel.getOneBlog(blogID);
        res.status(200).json(result);
        // console.log(result);
    }
    catch(e){
        console.log("DB error in blog controller getBlogDetials ");
        res.status(200).json({msg:"error"});
    }
    
}

const commentCreate = async (req, res)=>{
    let userID = req.body.userID;
    let blogID = req.body.blogID;
    let body = req.body.body;
    let result;
    console.log(userID, blogID, body);
    try{
        result = await blogModel.createComment(blogID, body, userID);
    }
    catch(e){
        console.log("db error in blogcontroller commentCreate ");
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


const getCommentCount = async(req, res) =>{
    let blogID = req.body.blogID;
    let result;
    try{
        result = await blogModel.getCommentCount(blogID);
        res.status(200).json(result);
        // console.log(result);
    }
    catch(e){
        console.log("DB error in blog controller getCommentCount ");
        res.status(200).json({msg:"error"});
    }
    
}

const getComments = async(req, res) =>{
    let blogID = req.body.blogID;
    let result;
    try{
        result = await blogModel.getCommentOfPost(blogID);
        res.status(200).json(result);
        // console.log(result);
    }
    catch(e){
        console.log("DB error in blog controller getComment ");
        res.status(200).json({msg:"error"});
    }    
}

const getSearchResults = async(req, res) =>{
    let search = req.body.search;
    let result;
    try{
        result = await blogModel.getSearchBlogs(search);
        res.status(200).json(result);
        // console.log(result);
    }
    catch(e){
        console.log("DB error in blog controller getSearchresult ");
        res.status(200).json({msg:"error"});
    }    
}





module.exports = {
    createBlog,
    getAllBlogs,
    showUserBlog,
    updateBlog,
    deleteBlog,
    shareBlog,
    getBlogDetails,
    commentCreate,
    getCommentCount,
    getComments,
    getSearchResults
}