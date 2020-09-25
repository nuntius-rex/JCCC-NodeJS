var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
var dbName = "classDB";
var collection = "roster";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbName);
  var query = { name: "Dano" };
  var values = { $set: {name: "Dan", student: "false" } };
  dbo.collection(collection).updateOne(query, values, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
