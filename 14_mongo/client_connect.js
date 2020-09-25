
//===================================
// This is a simple base connect:
//https://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html
//===================================
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var dbName = ""; //Database name goes here
var url = "mongodb://localhost:27017/"+dbName; //The database is appended here!!!

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  console.log(db); //This is the database object
  db.close();
});
