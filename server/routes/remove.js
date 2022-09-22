exports.removeDocument = function(collection, queryJSON, callback){
    collection.deleteMany(queryJSON, function(err, result){
        console.log("Removed the document: ");
        console.log(queryJSON);
        callback(result);
    });
};