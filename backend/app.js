const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postRoutes = require("./routes/posts")
mongoose.connect("mongodb+srv://user-heena-11:PBuRQ45YJdfRfguB@cluster0-n05wc.mongodb.net/node-angular?retryWrites=true")
.then(()=>
{
  console.log("Connected to database !"
  )
})
.catch(()=>{
  console.log( "Connection Failed");

});
app.use((req,res,next)=> {
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept");
 res.setHeader("Access-Control-Allow-Methods","GET, POST,PATCH,PUT,DELETE,OPTIONS");
  next();

});
app.use(bodyParser.json()); //valid express middleware for parsing json data
app.use(bodyParser.urlencoded({extended:false}))//will parse urll encoded dat
app.use("/images",express.static(path.join("backend/images")));
app.use("/api/posts",postRoutes);
module.exports = app ;
