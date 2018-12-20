const express = require('express');
const app = express();
app.use((req,res,next) => {
  console.log("first middleware");
 next();
 //if we comment next it will not be able to reach the next middleware
 //and either we should write next or we should send a response otherwise a timeout will occur

});

app.use((req,res,next) => {
 res.send('Hello from express');

});

module.exports = app ;
