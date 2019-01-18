const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
  title: {
  type:String,
  required:true} ,
  content:{
    type: String,
    required:true
  }
  //node js and javascript in general is uppercase S

});

module.exports = mongoose.model('Post',postSchema);
