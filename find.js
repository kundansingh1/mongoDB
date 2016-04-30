var filterAge = parseInt(process.argv[2]);
var mongo = require('mongodb').MongoClient
            mongo.connect(url, function(err, db) {
                var collection = db.collection('parrots');
                collection.find({      
                }).toArray(function(err, documents) {
                    if(document)
                    db.close();
                })
            })