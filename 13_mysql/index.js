const http = require("http");
const port=3000;
var fs = require('fs');
const mysql=require('mysql');
const con=mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "classicmodels"
});

const appConfig={
  "app_name":"Dan's App",
  "version":"1.0",
  "title":"Home",
  "page":"index.html"
};

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

    con.connect(function(error){
        if(error){
          console.log(error.sqlMessage);
          console.log("Unable to Connect");
        }else{
          console.log("Connected to Database");
        }
    });


    let country="USA";
    var sql=`SELECT customerNumber, customerName, contactFirstName, contactLastName,
            phone, city, state, country, creditLimit FROM customers WHERE country='${country}'`;
    console.log(sql);
    con.query(sql, function(error, result, fields){
          if(error){
            console.log(error);
            console.log(error.sqlMessage);
            console.log("Unable to get results");
          }else{
              let results={
                "appConfig":appConfig,
                "dbResults":result
              }
              res.end(JSON.stringify(results));
          }
    })


  }//End api


}).listen(port);
//console.log("Listening on http://localhost:"+port);
console.log(`Listening on http://localhost:${port}`);
