const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController.js")

router.post("/blog/create", blogController.createBlog);
router.get("/blog/newsfeed", blogController.getAllBlogs)
router.get("/blog/showMyBlogs", blogController.showUserBlog)
router.post("/blog/updateBlog", blogController.updateBlog);
router.post("/blog/deleteBlog", blogController.deleteBlog);
router.post("/blog/shareBlog", blogController.shareBlog);
// router.post("/blog/signup", blogController.signup);


module.exports = router;