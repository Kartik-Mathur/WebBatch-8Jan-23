let obj = {
    a: 1,
    "Hello World": "Earth",
    "":"Empty String",
    " ": "Space",
    "Hello": "Aur Kya Haal Chaal"
};

// console.log(obj.a);
// console.log(obj["a"]);

// console.log(obj.Hello);

// console.log(obj["Hello World"]);


for(let k in obj){
    console.log(obj[k]);
}

