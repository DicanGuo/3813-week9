const MongoClient = require('mongodb').MongoClient;
const url='mongodb://localhost:27017';
const dbName = 'mydb';
const client = new MongoClient(url);
const colName = 'products';
const funOrders = require('./dbOperations/orders');

client.connect(function(err){
    console.log("connection susccess")
    const db = client.db(dbName);
    console.log(db)
    const collection = db.collection(colName);
    // console.log(collection)

    funOrders(client, collection);

    // client.close();
});