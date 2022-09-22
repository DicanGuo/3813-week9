exports.findDocuments = function(collection, queryJSON, callback){
    collection.find().toArray(function(err, docs){
        console.log("Found the documents: ");
        console.log(docs);
        callback(docs);
    });
};