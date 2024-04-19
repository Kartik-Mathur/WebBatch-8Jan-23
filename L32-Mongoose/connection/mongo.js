const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

let cbDB;

function main() {
    return client.connect().then((client) => {
        cbDB = client.db("codingblocks");
    })
}

function getDB() {
    if (cbDB != undefined) return cbDB;
    return null;
}

module.exports.mongoConnect = main;
module.exports.getDB = getDB;