const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController.js")

router.post("/blog/create", blogController.createBlog);
router.get("/blog/newsfeed", blogController.getAllBlogs)
router.post("/blog/showMyBlogs", blogController.showUserBlog)
router.post("/blog/getBlog", blogController.getBlogDetails);
router.post("/blog/updateBlog", blogController.updateBlog);
router.post("/blog/deleteBlog", blogController.deleteBlog);
router.post("/blog/shareBlog", blogController.shareBlog);
// router.post("/blog/signup", blogController.signup);

//comment parts
router.post("/comment/create", blogController.commentCreate);
router.post("/comment/commentCount", blogController.getCommentCount);
router.post("/comment/getComments", blogController.getComments);


//search results
router.post("/search", blogController.getSearchResults);

module.exports = router;