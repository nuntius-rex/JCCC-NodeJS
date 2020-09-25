const http=require('http');
const fs=require('fs');
const path=require('path');
const mimeTypes=require('./lib/mimeTypes');
const port='3000';
var extname='';

http.createServer(function(req, res){
  //console.log(req.url);
  //console.log(mimeTypes);

  var url=req.url;

  if(url=="/"){
    url="/index.html";
  }

  var extname=String(path.extname(url)).toLowerCase().substring(1);
  console.log("Extension:"+extname);
  //console.log(mimeTypes);
  //console.log(mimeTypes.getMimeTypes(extname));
  var mimeType=mimeTypes.getMimeTypes(extname);
  console.log("Mime Types:"+mimeType);


  if(mimeType!=undefined){

      res.writeHead(200, {'Content-Type': mimeType});

      if(mimeType=="text/html"){
        var file="./views"+url;
      }else{
        var file="./public"+url;
      }

      console.log("File location:"+file);

      fs.readFile(file, function(error,data){
          if(error){
            console.error(error);
            res.end(error);
          }else{
            //console.log(data);
            res.end(data);
          }

      });

  }else{
    res.end("That file type is not supported.");
  }//End undefined check



}).listen(port);
