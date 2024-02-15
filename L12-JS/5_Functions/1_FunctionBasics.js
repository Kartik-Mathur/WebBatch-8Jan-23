function add(a,b){
    return a + b;
}

console.log(add(10,20));


function sayHi(name){
    return "Hello " + name;
}

console.log(sayHi("Aman"));
console.log(sayHi("Ishan"));

let sayHello = function hello(name){
    return "Oyee, Hello "+name;
}

console.log(sayHello("Mithu"));
// Since we invoke the function hello(){} by the name 'hello' there for there is no use of even writing 
// it, we can skip that part
// console.log(hello("Mithu"));


let sayBye = function (name){
    return "Bye "+ name;
}

console.log(sayBye("Bhupesh"));