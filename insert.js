var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var firstName = process.argv[2];
var lastName = process.argv[3];
var insertData = {};
insertData.firstName = firstName;
insertData.lastName = lastName;

mongo.connect(url, function(err, db) {
    if(err) throw err;
    var docs = db.collection('docs');
    insertData = JSON.stringify(insertData);
    console.log(insertData);
    docs.insert(insertData, function(err, data) {
        db.close();
    })
    
})