var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbName = "classDB";
var collection = "roster";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbName);
/*
  //DELETE ONE:
  var query = { name: 'Dan' };
  dbo.collection(collection).deleteOne(query, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });

*/

/*
var query = { name: /^O/ };
  dbo.collection(collection).deleteMany(query, function(err, obj) {
    //if (err) throw err;
    if (err) {
      console.log("Could not delete many");
    }
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
*/

/*
  //DELETE ENTIRE COLLECTION (IF LAST COLLECTION, WILL REMOVE DB):
  dbo.collection(collection).drop(function(err, del) {
  //dbo.dropCollection(collection, function(err, del) {
    //if (err) throw err;
    if (err) {
      console.log("Collection deleted");
    }
    if (del) console.log("Collection deleted");
  });
*/

//DELETE ENTIRE DATABSE:
  dbo.dropDatabase( function(err, del) {
    //if (err) throw err;
    if (err) {
      console.log("Database deleted");
    }
    if (del) console.log("Database deleted");
  });

  db.close();

});
