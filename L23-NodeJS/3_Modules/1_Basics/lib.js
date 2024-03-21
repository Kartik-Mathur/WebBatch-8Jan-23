console.log("Running lib1");
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a-b;
}

function checkPrime(n){
    for(let i = 2 ; i < n ; i++){
        if(n%i == 0) return false;
    }
    return true;
}

module.exports = {
    add,
    checkPrime,
    subtract
}