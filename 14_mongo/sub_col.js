var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
var dbName = "classDB";
var collection1 = "roster";
//var collection2 = "tech";

MongoClient.connect(url,  { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbName);
  dbo.collection(collection1).aggregate([
    { $lookup:
      {
        from: 'tech',
        localField: 'fav_tech_id',
        foreignField: 'id',
        as: 'favorite_tech'
      }
    }
  ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});
