const {query} = require("../helpers/db.js");


const login = async (username) => {
    let sqlCommand = `SELECT * FROM user WHERE username = '${username}';`;
    // let sqlCommand = `SELECT * FROM user WHERE 1`;
    let result = await query(sqlCommand);
    return result;
}


const signup = async (username, email, pass) =>{
    let sqlCommand = `INSERT INTO user(username, email, pass, verified) VALUES ('${username}', '${email}', '${pass}', 0);`;
    // let sqlCommand = `SELECT * FROM user WHERE 1`;
    let result = await query(sqlCommand);
    return result;
}



module.exports = {
    login,
    signup
}