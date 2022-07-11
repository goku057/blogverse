const {query} = require("../helpers/db.js");



const createBlog = async (userID, title, body, cat) => {
    let sqlCommand = `INSERT INTO blog(user_id, title, body, cat, share) VALUES (${userID}, '${title}', '${body}', '${cat}', 0)`;
    // let sqlCommand = `SELECT * FROM user WHERE 1`;
    let result = await query(sqlCommand);
    return result;
}

const getBlogs = async () => {
    let sqlCommand = `SELECT blog.id, user_id, title, body, cat, post_time, share, username FROM blog JOIN user ON user.id = blog.user_id WHERE cat = 1;`;
    let result = await query(sqlCommand);
    return result;
}

const getUserBlogs = async  (userID) => {
    let sqlCommand = `SELECT id, user_id, title, body, cat, post_time, share FROM blog WHERE id = ${userID};`;
    let result = await query(sqlCommand);
    return result;
}

const getOneBlog = async (blogID) =>{
    let sqlCommand = `SELECT id, user_id, title, body, cat, post_time, share FROM blog WHERE id = ${blogID};`;
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

module.exports = {
    createBlog,
    getBlogs,
    getUserBlogs,
    getOneBlog,
    updateBlog,
    deleteBlog,
    shareBlog
}