// Let is block scope, Hoisting Nahi hoti
// Var is functional scope, Hoisting Hoti hai

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i); // Error

var x = 1;

function fun(){
    // console.log(x);

    let x = 1;
    
    
    console.log(x);

    x++;
}

fun();

console.log(x);
// Ab VAR USE NAHI HOTA, WE ONLY USE LET