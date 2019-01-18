const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require('./models/post');
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
 res.setHeader("Access-Control-Allow-Methods","GET, POST,PATCH,DELETE,OPTIONS");
  next();

});
app.use(bodyParser.json()); //valid express middleware for parsing json data
app.use(bodyParser.urlencoded({extended:false}))//will parse urll encoded dat
app.post("/api/posts",(req,res,next)=>{

 const post = new Post({
title:req.body.title,
content : req.body.content
 }) ;//const post = req.body ;

 post.save();
  console.log(post);
  res.status(201).json({
    message:"Post added successfully"
  });
});
app.use((req,res,next) => {
  console.log("first middleware");
 next();
 // if we comment next it will not be able to reach the next middleware
 // and either we should write next or we should send a response otherwise a timeout will occur
});

app.get('/api/posts',(req,res,next) => {

     Post.find()
     .then(documents=>{
      res.status(200).json({
        message: "Post fetched",
        posts :documents
      });
    });

  //  const posts=[
//    {
//      id: 'dwkhdu12',
//      title: 'First server-side post',
//      content: 'this is coming from the server'
//    },
//    {
//      id:"23uh3uo2",
//      title:"secured post",
//      conetnt: "This is coming"
//    }
//  ];

});

app.delete("/api/posts/:id",(req,res,next)=> {
  console.log(req.params.id);
  Post.deleteOne({
    _id: req.params.id
  })
  .then(result=>{
    console.log(result);
    res.status(200).json({message: "Post Deleted!"});
  });

});

module.exports = app ;
