let fun = (name, age) => {
    console.log(name, age);
}

fun("Sibam", 18);

let sum = (a, b) => { // User returns a value
    return a + b;
}

console.log(sum(10, 20));

let sum1 = (a, b) => a + b; // Default return
console.log(sum1(10, 20));