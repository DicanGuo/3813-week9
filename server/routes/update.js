exports.updateDocument = function(collection, queryJSON, updateJSON, callback){
    collection.updateOne(queryJSON, {$set:updateJSON}, function(err, result){
        console.log("Update the document: ");
        console.log(queryJSON);
        console.log('SET to: ');
        console.log(updateJSON);
        callback(result);
    });
};