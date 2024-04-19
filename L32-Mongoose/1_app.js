const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const { MongoClient } = require('mongodb');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname,'')));

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

let cbDB = undefined;
async function main() {
    if(cbDB != undefined) return cbDB;

    // Use connect method to connect to the server
    await client.connect();

    console.log('Connected successfully to server');
    cbDB = client.db("codingblocks");
    return 'done.';
}

main()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})
.catch(err=>{
    console.log("Error aa gaya DB connection mei");
})