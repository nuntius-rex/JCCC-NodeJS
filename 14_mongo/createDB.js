
//================================================================
// CREATE DATABASE:
// MongoDB will not create the database until a collection and one
// document is inserted!!!
//================================================================
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var dbName = "classDB"; //Database name goes here
var url = "mongodb://localhost:27017/"+dbName; //The database is appended here!!!

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  //if (err) throw err;
  if (err) {
    console.log("Unable to connect");
  }
  var dbo = db.db(dbName);
  //Singe Object:
  var Obj = { name: "Dan", student: "false", instructor: "true", tech_id: 4 };
  //Insert Object into Collection:
  dbo.collection("attendance").insertOne(Obj, function(err, res) {
    //if (err) throw err;
    if (err) {
      console.log("Unable to insert");
    }
    console.log("1 document inserted");
  });

  //Multiple Objects:
  var collection1="roster";
  ObjArray=[
    //{name: "Dan", student: "false", instructor: "true", tech: "" },
    {name: "Jeff", student: "true", instructor: "true", fav_tech_id: 3 },
    {name: "Arno", student: "true", instructor: "false", fav_tech_id: 2 },
    {name: "Allyson", student: "true", instructor: "false", fav_tech_id: 1 },
    {name: "Paul", student: "true", instructor: "false", fav_tech_id: 1 }
  ];
  dbo.collection(collection1).insertMany(ObjArray, function(err, res) {
    //if (err) throw err;
    if (err) {
      console.log("Unable to insert multiple");
    }
    console.log("Number of documents inserted: " + res.insertedCount + " for collection " + collection1);

  });

  var collection2="tech";
  ObjArray=[
    {id:1, language: "HTML"},
    {id:2, language: "CSS"},
    {id:3, language: "JavaScript"},
    {id:4, language: "NodeJS"}

  ];
  dbo.collection(collection2).insertMany(ObjArray, function(err, res) {
    //if (err) throw err;
    if (err) {
      console.log("Unable to insert multiple");
    }
    console.log("Number of documents inserted: " + res.insertedCount + " for collection " + collection2);

  });



  db.close();
});

//CONFIRM:
//"C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"
//use classDB
//db.attendance.find()
//db.attendance.find().pretty()
