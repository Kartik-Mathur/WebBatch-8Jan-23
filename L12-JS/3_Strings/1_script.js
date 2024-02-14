// let str = "Hello World Learning Strings";
let str = "Hello";

console.log(str);

// for(let i = 0 ; i < str.length ; i++){
//     console.log(str[i]);
// }

for(let indx in str){
    console.log(indx);
}

for(let el of str){
    console.log(el);
}