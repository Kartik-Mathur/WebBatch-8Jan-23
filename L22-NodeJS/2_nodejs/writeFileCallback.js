// To use fs module we will have to require it in our file.
const fs = require('fs');
// let filepath = '/Users/kartikmathur/Desktop/C++/WebDev_Live_8Jan/L22-NodeJS/2_nodejs'

/*
Remember: 
'__dirname' gives you the path of the currentFile jiske andar
'__dirname' run kia hai aapne

For Example: writeFile.js currently hai inside: '/Users/kartikmathur/Desktop/C++/WebDev_Live_8Jan/L22-NodeJS/2_nodejs'
Toh writeFile ke andar just use __dirname and same hi cheeze aa jaegi, manually type krne ki need nahi padegi
*/

//  filepath: Path absolute hota hai
// Computer ki root directory se lekar jis bhi file mei data likhna hai us
// file tak ka path

let filepath = __dirname + '/database/data.json'
console.log(filepath);

// Har jagah err first call back functions hote hai
// That means callback function ke andar we'll have the err as the argument first
let data = {
    text: 'Hello World',
    date: '18 March 2024'
}

fs.writeFile(filepath, JSON.stringify(data),(err)=>{
    if(err) {
        console.log(err);
    }
    else{
        console.log("Sab Kuch badhiya ho gaya");
    }
})