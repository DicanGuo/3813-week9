const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017';

exports.insert = function(req,res){
    MongoClient.connect(url, {useNewUrlParser:true},function(err,client){
        if (err) throw err;
        let db = client.db("dbName");
        let doc = req.body;
        db.collection("colName").insertOne(doc, (err,result) => {
            console.log("Inserted : ");
            console.log(doc);
            res.send(doc);
            client.close();

        });
    });
};

exports.find = function(req,res){
    MongoClient.connect(url, {useNewUrlParser:true},function(err,client){
        if (err) throw err;
        let db = client.db("dbName");
        let docs = req.body;
        db.collection("colName").find({}).toArray().then(docs, (err,result) => {
            console.log("Found : ");
            console.log(result);
            res.send(result);
        }).catch((err)=>{console.log(err);}).finally(()=>{client.close();});
    });
};

exports.update = function(req,res){
    MongoClient.connect(url, function(err,client){
        if (err) throw err;
        let db = client.db("dbName");
        db.collection("colName", function(err, collection){
            let queryJSON = req.params;
            let updateJSON = req.body;
            collection.updateMany(queryJSON, {$set: updateJSON}, function(err,result){
                console.log("change Document: " + queryJSON);
                console.log("to: "+ updateJSON);
                res.send(resuslt);
                client.close();
            });
        });
    });
};

exports.delete = function(req,res){
    MongoClient.connect(url, function(err,client){
        if (err) throw err;
        let db = client.db("dbName");
        db.collection("colName", function(err, collection){
            let queryJSON = req.body;
            collection.deleteMany(queryJSON, function(err,result){
                console.log("Deleted Document: " + queryJSON);
                res.send(queryJSON);
                client.close();
            });
        });
    });
};