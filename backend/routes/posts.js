const express = require("express");
const router =  express.Router();
const Post = require("../models/post")
router.post("",(req,res,next)=>{

  const post = new Post({
 title:req.body.title,
 content : req.body.content
  }) ;//const post = req.body ;

  post.save().then(result => {
    res.status(201).json({
      message: "Post added successfully",
      postId : result._id
    });
  });
 });



router.get('',(req,res,next) => {

      Post.find()
      .then(documents=>{
       res.status(200).json({
         message: "Post fetched",
         posts :documents
       });
     });
   });

     router.get('/:id',(req,res,next) => {

       Post.findById(req.params.id)
       .then(post=>{
         if(post){
           res.status(200).json(post);
         }else{
           res.status(404).json({
             message:  'Post not found'
           });
         }

      });
     });


     router.put('/:id',(req,res,next) => {
       const post = new Post({
         _id: req.body.id ,
         title: req.body.title ,
         content: req.body.content
       });
       Post.updateOne({_id: req.params.id},post).then(result => {
         console.log(result);
         res.status(200).json({message: "Update Successful"});
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

 //});

 router.delete("/:id",(req,res,next)=> {
   console.log(req.params.id);
   Post.deleteOne({
     _id: req.params.id
   })
   .then(result=>{
     console.log(result);
     res.status(200).json({message: "Post Deleted!"});
   });

 });

 module.exports = router ;
