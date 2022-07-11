const authModel = require("../models/authModel");




const login = async (req, res) => {
    // res.send("its loginn");
    // console.log(req.cookies.sessionID);
    if(req.body.username == undefined){
        res.send("username undefined");
        return;
    }
    let result;
    try{
    result = await authModel.login(req.body.username);
    // console.log(result);
    }
    catch(e){
        console.log("databse error in authController login function");
        result = [];
    }
    // console.log(result);
    if(result != undefined && result.length == 1){
        if(result[0].pass == req.body.pass){
            let data = {
                valid : true,
                verified: result[0].verified,
                userID : result[0].id,
                msg: "success"
            }
            res.cookie("sessionID", "logged in");
            // res.clearCookie("sessionID");
            res.status(200).json(data);
            return;
        }
        else{
            let data = {
                valid : false,
                verified: 0,
                msg: "wrong password"
            }
            // res.cookie("sessionID", "logged in");
            // res.clearCookie("sessionID");
            res.status(200).json(data);
            return;
        }
    }
    else{
        let data = {
            valid : false,
            verified: 0,
            msg: "user doesnt exist"
        }
        res.status(200).json(data);
    }
    
}


const signup = async (req, res) =>{
    if(req.body.username == undefined || req.body.email == undefined || req.body.pass == undefined || req.body.username == "" || req.body.email == "" || req.body.pass == "" ){
        let data = {
            valid: false,
            verified: 0,
            msg: "fields are empty"
        }
        res.status(200).json(data);
        return;
    }
    else{
        let username = req.body.username;
        let email = req.body.email;
        let pass = req.body.pass;
        let result;
        
        try{
            let people = await authModel.login(username);
            let peopleCount = people.length;
            if(peopleCount == 0){
                result = await authModel.signup(username, email, pass);
            }
            else{
                let data = {
                    valid: false,
                    verified: 0,
                    msg: "username already taken"
                }
                res.status(200).json(data);
                return;
            }
        }
        catch(e){
            console.log("db error in authcontroller signup function!!!");
        }
        if(result){
            let people;
            try{
                people = await authModel.login(username);
            }
            catch(e){
                console.log("error in auth controller signup function 2")
            }
            let data = {
                valid: true,
                verified: 0,
                userID : people[0].id,
                msg: "success"
            }
            // console.log(data.userID);
            res.cookie("sessionID", "logged in");
            res.status(200).json(data);
            return;
        }
        else{
            let data = {
                valid: false,
                verified: 0,
                msg: "signup failed"
            }
            res.status(200).json(data);
            return;
        }
        
    }
}

const logout = (req, res)=>{
    res.clearCookie("sessionID");
    res.status(200).send({valid: false});
}

const checkAccess = (req, res) =>{
    if(req.cookie.sessionID == "logged in"){
        return true;
    }
    else{
        return false;
    }
}

module.exports = {
    login,
    signup,
    logout,
    checkAccess
}