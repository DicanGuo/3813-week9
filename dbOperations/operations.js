exports.insertDocuments = function(collection, docArray, callback){
    collection.insertMany(docArray, function(err, result){
        console.log("Inserted the documents: ");
        console.log(docArray);
        callback(result);
    });
};

exports.findDocuments = function(collection, queryJSON, callback){
    collection.find().toArray(function(err, docs){
        console.log("Found the documents: ");
        console.log(docs);
        callback(docs);
    });
};

exports.updateDocument = function(collection, queryJSON, updateJSON, callback){
    collection.updateOne(queryJSON, {$set:updateJSON}, function(err, result){
        console.log("Update the document: ");
        console.log(queryJSON);
        console.log('SET to: ');
        console.log(updateJSON);
        callback(result);
    });
};

exports.removeDocument = function(collection, queryJSON, callback){
    collection.deleteMany(queryJSON, function(err, result){
        console.log("Removed the document: ");
        console.log(queryJSON);
        callback(result);
    });
};

// exports.dropCollection = function(collection){
//     collection.drop();
// };

// exports.createCollection = function(db){
//     db.createCollection('products');
// };