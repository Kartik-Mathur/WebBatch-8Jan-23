// To use fs module we will have to require it in our file.
const fs = require('fs/promises');

let filepath = __dirname + '/database/data.json'
// console.log(filepath);

let data = {
    text: 'Hello World!!!!!!!!!',
    date: '18 March 2024'
}

fs.writeFile(filepath, JSON.stringify(data))
    .then(() => {
        console.log("Sab Badhiya")
    })
    .catch(err => {
        console.log(err);
    })