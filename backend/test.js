 require("dotenv").config();
 var nodemailer = require('nodemailer');

 console.log(process.env.email)
 console.log(process.env.pass)


 var transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: process.env.email,
       pass: process.env.pass
     }
   });
   
   var mailOptions = {
     from: process.env.email,
     to: 'rarnob181011@bscse.uiu.ac.bd',
     subject: 'Sending Email using Node.js',
     text: 'That was easy!'
   };
   
   transporter.sendMail(mailOptions, function(error, info){
     if (error) {
       console.log(error);
     } else {
       console.log('Email sent: ' + info.response);
     }
   });