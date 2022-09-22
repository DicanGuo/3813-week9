// used for routing
const express = require('express');
const app = express();
// provide http functionality
const http = require('http').Server(app);

const bodyParser = require("body-parser");

const cors = require('cors');
app.use(cors());
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectId;

// use bodyparser
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const url = 'mongodb://localhost:27017';

// MongoClient.connect(url, {maxPoolSize:10, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
//     if(err){return console.log(err)}
//     const dbName = 'mydb';
//     const db = client.db(dbName);

//     require('./routes/add.js')(db, app);
//     // require('./routes/read.js')(db.app);
//     // require('./routes/remove.js')(db.app);
//     // require('./routes/update.js')(db.app);

//     // require('./listen.js')(http);
// })


app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

})

const products = require('./dbOperations/operations');
app.post('/productInsert', products.insert);
app.get('/productFind', products.find);
app.post('/productUpdate', products.update);
app.post('/productDelete', products.delete);


app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})