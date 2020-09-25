const http = require("http");
const port=3000;
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'application/json'});

  let jsonArray=[
    {
      name:"Dan",
      greeting:"Hello!"
    },
    {
      name:"John",
      greeting:"Howdy!"
    }
  ]

  res.end( JSON.stringify(jsonArray));
}).listen(port);

//console.log("Listening on http://localhost:"+port);
console.log(`Listening on http://localhost:${port}`);
