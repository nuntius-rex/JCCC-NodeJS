const http = require("http");
const port=3000;
var fs = require('fs');
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'application/json'});

  //console.log(req);
  //console.log(req.method);
  //console.log(req.url);
  //console.log(req.headers);

  var url=req.url;
  var file="";
  if(url=="/1"){
    var file="./classMembers.json";
  }else if(url=="/2"){
    var file="./classMembers2.json";
  }

  if(file!=""){
      console.log("Now serving: "+file );

      fs.readFile(file, 'utf8', function(error,data){
        if(error){
          console.error(error);
          res.end(JSON.stringify(error));
        }
        res.end(data);
      });
  }else{
    res.end( JSON.stringify({"error":"File request is not defined"}) );
  }



}).listen(port);

//console.log("Listening on http://localhost:"+port);
console.log(`Listening on http://localhost:${port}`);
