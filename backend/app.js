const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

//setting up middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//setting up routes
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");


//using the routes
app.use(authRoutes);
app.use(blogRoutes);



app.get("/api", (req, res) => {
    res.send("EZ Boiz");
})


app.listen(5000, ()=>{
    console.log("listening to port 5000");
})