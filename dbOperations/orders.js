const docArray = [
    // { "id" : 0, "name" : "First", "description" : "my first product", "price" : 100.00, "units" : 12 },
    // { "id" : 1, "name" : "Second", "description" : "my second product", "price" : 25.75, "units" : 5 },
    // { "id" : 2, "name" : "Third", "description" : "my third product", "price" : 33.33, "units" : 33 }
    { id : 0, name : "First", description : "my first product", price : 100.00, units : 12 },
    { id : 1, name : "Second", description : "my second product", price : 25.75, units : 5 },
    { id : 2, name : "Third", description : "my third product", price : 33.33, units : 33 }
];

const queryJSONf = {};
const queryJSONup = {id: 2};
const updateJSON = {price: 999};
const queryJSONdel = {id: {$in: [0,1,2]}};
const operations = require('./operations');

module.exports = function(client, col){
    operations.insertDocuments(col, docArray,
        ()=> {
            console.log("==========================================");
            
            operations.updateDocument(col, queryJSONup, updateJSON, 
                () => {
                    console.log("==========================================");

                    operations.removeDocument(col, queryJSONdel, 
                        () => {
                            console.log("==========================================");

                            operations.findDocuments(col, queryJSONf, 
                                () => {client.close();})
                        });
                });
        });
};