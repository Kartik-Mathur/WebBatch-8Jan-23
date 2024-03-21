const path = require('path');
const fs = require('fs/promises');
const outputPath = path.join(__dirname,'output.json');
async function mergeFiles(file1,file2){
    try{
        let data1 = await fs.readFile(file1);
        let data2 = await fs.readFile(file2);
        data1 = JSON.parse(data1);
        data2 = JSON.parse(data2);
        let data = [...data1,...data2];
        
        data.sort((a,b)=>{
            return b-a
        });
        // data.sort();
        console.log(data);
        await fs.writeFile(outputPath,JSON.stringify(data));
    }catch(err){
        console.log(err);
    }
}

let file1 = path.join(__dirname,'data.json');
let file2 = path.join(__dirname,'data1.json');

mergeFiles(file1,file2);