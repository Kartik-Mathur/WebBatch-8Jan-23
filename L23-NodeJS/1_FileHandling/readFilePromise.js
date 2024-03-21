const fs = require('fs/promises');
const filepath = __dirname + '/database/data.json';


function getData(filePath) {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await fs.readFile(filePath);
            data = JSON.parse(data);
            resolve(data);
        } 
        catch (err) {
            reject(err);
        }
    })
}

getData(filepath)
    .then((data)=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })