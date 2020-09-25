const http = require("http");
const port=3000;
var fs = require('fs');
http.createServer(function(req, res){

  var url=req.url;
  var file="";

  if(url=="/" || url=="/index.html"){
    res.writeHead(200, {'Content-Type':'text/html'});
    var file="./views/index.html";

    fs.readFile(file, 'utf8', function(error,data){
        if(error){
          console.error(error);
          res.end(error);
        }
        res.end(data);
    });

  }

  if(url=="/api"){
    res.writeHead(200, {'Content-Type':'application/json'});
    var file="./models/appConfig2.json";

    fs.readFile(file, 'utf8', function(error,data){
        if(error){
          console.error(error);
          res.end(JSON.stringify(error));
        }
        res.end(data);
    });
  }



}).listen(port);

//console.log("Listening on http://localhost:"+port);
console.log(`Listening on http://localhost:${port}`);
