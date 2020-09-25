var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbName = "classDB";
var collection = "roster";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  //if (err) throw err;
  if (err) {
    console.log("Unable to connect");
  }

  var dbo = db.db(dbName);

  //FIND FIRST
  dbo.collection(collection).findOne({}, function(err, result) {
    //if (err) throw err;
    if (err) {
      console.log("Unable to find one");
    }
    if(result){
      console.log("finding first:");
      console.log("First in collection: "+result);
      console.log("First name in collection: "+result.name);
    }else{
      console.log("Unable to find one");
    }
  });

  //FIND BY OBJECT
  var query = { name: "Jeff" };
  dbo.collection(collection).find(query).toArray(function(err, result) {
    //if (err) throw err;
    if (err) {
      console.log("Unable to query by name");
    }
    if(result.name){
      console.log("finding Jeff:");
      console.log("Query result: "+result);
      console.log(
        "Found from query: "
        +result[0].name
        +" student: "
        +result[0].student
      );
    }else{
        console.log("Unable to query by name");
    }

  });

  dbo.collection(collection).find().toArray(function(err, result) {
    //if (err) throw err;
    if (err) {
      console.log("Unable to find all");
    }
    console.log("finding all:");
    console.log(result);
  });

  dbo.collection(collection).find().limit(3).toArray(function(err, result) {
    //if (err) throw err;
    if (err) {
      console.log("Unable find with limit");
    }
    console.log("finding with limit:");
    console.log(result);
  });

  var sort = { name: 1 };
  dbo.collection(collection).find().sort(sort).toArray(function(err, result) {
    //if (err) throw err;
    if (err) {
      console.log("Unable to sort by name");
    }
    console.log("Collection sorted by name:");
    console.log(result);
  });


  db.close();
});
