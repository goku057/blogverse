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
                username: result[0].username,
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
                username:people[0].username,
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
    if(req.cookies.sessionID == "logged in"){
        return true;
    }
    else{
        return false;
    }
}






var nodemailer = require('nodemailer');
require("dotenv").config();


const getToken = async (req, res)=>{

    let userID = req.body.userID;
    let email;
    console.log("get token from auth controller called");
    try{
        let result = await authModel.getUserInfo(userID);
        email = result[0].email; 
    }
    catch(e){
        console.log("db error");
        res.json("DB error");
        return;
    }

    let a = Math.random();
    a = Math.floor(a * 1000000);
    let msg = "Your code is " + a;
    // res.json(a);
    res.cookie("userToken", a, {maxAge: 120000});
    // res.clearCookie(req.cookie);
    // console.log(req.cookies);
    // res.cookie("my-cookies", req.body.id_token, {
        
    //   });
    res.json({token:a});
    // console.log(process.env.email)
    // console.log(process.env.pass)

    let reciever = email;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.email,
          pass: process.env.pass
        }
      });
      
      var mailOptions = {
        from: process.env.email,
        to: reciever,
        subject: 'Verify your account',
        text: msg 
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.json("failed");
        } else {
          console.log('Email sent: ' + info.response);
          console.log("cookie is " + req.cookies.userToken);
          res.json("success");
        }
      });
}


const verify = async (req, res)=>{
    let userToken = req.body.token;
    let userID = req.body.userID;
    // console.log("userToken is " + userToken , " cookie = " , req.cookies);
    if(userID){
        // if(userToken == req.cookies.token){
            try{
                await authModel.verifyToken(userID);
                res.json({msg:"success"});
            }catch(e){
                res.json({msg:"error"});
            }
        // }
        // else{
        //     res.json({msg:"error"});
        // }
    }
    else {
        res.json({msg:"error"});
    }
    
    // res.clearCookie(req.cookie);
    // console.log(req.cookies);
    // // res.cookie("my-cookies", req.body.id_token, {
        
    // //   });
    // res.json("cookie set");
}

module.exports = {
    login,
    signup,
    logout,
    checkAccess,
    getToken,
    verify
}