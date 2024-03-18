const fs = require('fs/promises');

let filepath = __dirname + '/database/data.json'
// console.log(filepath);

fs.readFile(filepath,{
    encoding: 'utf-8'
}).then((data)=>{
    data = JSON.parse(data);
    console.log(data.text);
    console.log(data.date);
})
.catch((err)=>{
    console.log(err);
})