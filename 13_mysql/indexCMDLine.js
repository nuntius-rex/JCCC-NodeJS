const mysql=require('mysql');
//console.log(mysql);
const con=mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1lex2admit",
  database: "classicmodels"
});

con.connect(function(error){
    if(error){
      console.log(error.sqlMessage);
      console.log("Unable to Connect");
    }else{
      console.log("Connected to Database");
    }
});

let city="London";
var sql=`SELECT customerName, contactFirstName, contactLastName, phone, city FROM customers WHERE city='${city}'`;
con.query(sql, function(error, result, fields){
      if(error){
        console.log(error);
        console.log(error.sqlMessage);
        console.log("Unable to get results");
      }else{
          //MAY NEED TO OPTIONALLY CONVERT BACK TO OBJECT:
          //var results=JSON.parse(JSON.stringify(result));
          //console.log(fields);
          //console.log(result);
          //console.log(result.length);
          var output="";
          for(let i=0;i<result.length;i++){
            let customer=result[i]["customerName"];
            let first=result[i]["contactFirstName"];
            let last=result[i]["contactLastName"];
            let phone=result[i]["phone"];
            let city=result[i]["city"];
            output+=`
            ${customer} ${first} ${last} ${phone} ${city}
            `;
          }
          console.log(output);
      }
})
