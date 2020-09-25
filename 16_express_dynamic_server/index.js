const express=require('express');
const app=express();
const port=3000;

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
  //res.end('Hello World!');
  res.sendFile(__dirname+'/views/index.html');
});

app.listen(port);
console.log(`Listening on http://localhost:${port}`);
