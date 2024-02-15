function outerFun() {
    // inner function create kia hai
    function innerFun() {
        console.log("Inside Inner Fun");
        // Function ke andar se kch return na krne par it return undefined by default
    }

    return innerFun;
    // return innerFun();
}


let f = outerFun();
console.log(f);
f();



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function meraFunction(add, sub) {
    console.log(add(10, 20));
    console.log(subtract(30, 10));
}


// meraFunction(add,subtract);
meraFunction(function add(a, b) {
    return a + b;
}, function subtract(a, b) {
    return a - b;
});