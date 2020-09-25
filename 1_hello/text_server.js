const http = require("http");
const port=3000;
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end("Hello World!");
}).listen(port);

//console.log("Listening on http://localhost:"+port);
console.log(`Listening on http://localhost:${port}`);
