const http = require("http");
const port=3000;
var fs = require('fs');
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'application/json'});

  var file="./classMembers.json";

  fs.readFile(file, 'utf8', function(error,data){
      if(error){
        console.error(error);
        res.end(JSON.stringify(error));
      }
      res.end(data);
  });

}).listen(port);

//console.log("Listening on http://localhost:"+port);
console.log(`Listening on http://localhost:${port}`);
