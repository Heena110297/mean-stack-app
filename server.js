// const http = require('http');
// /*const server = http.createServer((req, res) => {
//   res.end('This is my first Response');
// });*/
// const port = process.env.PORT || 3000 ;
// const app =  require('./backend/app');
// app.set('port',port);
// const server = http.createServer(app);
// server.listen(port);
const http = require('http');
const app = require("./backend/app");
const debug = require('debug')("node-angular");

const normalizePort = val => {
  var port = parseInt(val,10);
  if(isNaN(port)){
    return val;
  }
  if(port>=0){
    return port;
  }
  return false;
};

const onError= error=> {
  if(error.syscall !== "listen"){
    throw error ;
  }
  const bind = typeof addr === "string" ? "pipe" + addr: "port" + port;
  switch(error.code){
    case "EACCESS":
    console.error(bind + "requires elevated priveleges");
    process.exit();
    break;
    case "EADDRINUSE":
    console.error(bind+" is already in use");
    process.exit();
    break;
    default:
    throw error ;
  }
};

const onListening=()=>{
  const addr = server.address();
  const bind= typeof addr === "string" ? "pipe"+ addr: "port" + port;
  debug("Listening on "+bind);
};

const port = normalizePort(process.env.port || 3000);
app.set("port",port);

const server = http.createServer(app);
server.on("error",onError);
server.on("listening",onListening);
server.listen(port);
