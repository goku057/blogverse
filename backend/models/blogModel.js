const {query} = require("../helpers/db.js");



const createBlog = async (userID, title, body, cat) => {
    let sqlCommand = `INSERT INTO blog(user_id, title, body, cat, share) VALUES (${userID}, '${title}', '${body}', '${cat}', 0)`;
    // let sqlCommand = `SELECT * FROM user WHERE 1`;
    let result = await query(sqlCommand);
    return result;
}

const getBlogs = async () => {
    let sqlCommand = `SELECT blog.id, user_id, title, body, cat, post_time, share, username FROM blog JOIN user ON user.id = blog.user_id WHERE share = 1  ORDER BY blog.post_time DESC;`;
    let result = await query(sqlCommand);
    // console.log(result);
    return result;
}

const getUserBlogs = async  (userID) => {
    let sqlCommand = `SELECT blog.id, user_id, title, body, cat, post_time, share, username FROM blog JOIN user ON user.id = blog.user_id WHERE user_id = ${userID} ORDER BY post_time DESC;`;
    let result = await query(sqlCommand);
    // console.log(result);
    return result;
}

const getOneBlog = async (blogID) =>{
    let sqlCommand = `SELECT blog.id, user_id, title, body, cat, post_time, share, username FROM blog JOIN user ON user.id = blog.user_id WHERE blog.id = ${blogID};`;
    let result = await query(sqlCommand);
    return result;
}

const updateBlog = async (blogID, title, body, cat) =>{
    let sqlCommand = `UPDATE blog SET title="${title}",body="${body}",cat="${cat}" WHERE  id = ${blogID};`;
    let result = await query(sqlCommand);
    return result;
}

const deleteBlog = async (blogID) =>{
    let sqlCommand = `DELETE FROM blog WHERE  id = ${blogID};`;
    let result = await query(sqlCommand);
    return result;
}

const shareBlog = async (blogID) =>{
    let sqlCommand = `UPDATE blog SET share=1 WHERE  id = ${blogID};`;
    let result = await query(sqlCommand);
    return result;
}



const getCommentCount = async (blogID) =>{
    let sqlCommand = `SELECT COUNT(comments.id) AS comment_count FROM comments WHERE blog_id = ${blogID};`;
    let result = await query(sqlCommand);
    return result;
}

const createComment = async (blogID, body, userID) =>{
    let sqlCommand = `INSERT INTO comments(user_id, blog_id, body) VALUES ( ${userID}, ${blogID}, '${body}');`;
    let result = await query(sqlCommand);
    return result;
}

const getCommentOfPost = async (blogID) =>{
    let sqlCommand = `SELECT c.id, c.user_id, blog_id, c.body, c.post_time,username FROM comments AS c JOIN blog AS b ON c.blog_id = b.id JOIN user ON user.id = c.user_id WHERE b.id = ${blogID} ORDER BY c.post_time DESC;`;
    let result = await query(sqlCommand);
    return result;
}


const getSearchBlogs = async (search) => {
    let sqlCommand = `SELECT blog.id, user_id, title, body, cat, post_time, share, username FROM blog JOIN user ON user.id = blog.user_id WHERE share = 1 AND (title LIKE "%${search}%" OR cat LIKE "%${search}%")  ORDER BY blog.post_time DESC;`;
    let result = await query(sqlCommand);
    // console.log(result);
    return result;
}


module.exports = {
    createBlog,
    getBlogs,
    getUserBlogs,
    getOneBlog,
    updateBlog,
    deleteBlog,
    shareBlog,
    getCommentCount,
    createComment,
    getCommentOfPost,
    getSearchBlogs
}