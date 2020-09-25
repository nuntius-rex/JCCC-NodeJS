const http = require("http");
const port=3000;
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(`<html>
    <head>
    <title>Hello World!</title>
    <!-- link rel="stylesheet" href="/main.css" -->
    <!-- Note: if the above stylesheet link were active, given the current
    configuration, the server could not serve it, even if the file existed.-->
    </head>
    <body>
      <h1>Hello World!</h1>
    </body>
    </html>
   `);
}).listen(port);

//console.log("Listening on http://localhost:"+port);
console.log(`Listening on http://localhost:${port}`);
