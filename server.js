const http = require('http');
/*const server = http.createServer((req, res) => {
  res.end('This is my first Response');
});*/
const port = process.env.PORT || 3000 ;
const app =  require('./backend/app');
app.set('port',port);
const server = http.createServer(app);
server.listen(port);

