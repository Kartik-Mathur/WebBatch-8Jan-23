// Let's create a function to add 1 second of delay..
// endTime - startTime >= 1sec
function delayOneSec() {
    let currentTime = new Date().getTime();

    while (new Date().getTime() - currentTime < 1000) {

    }
}

function delayNSec(n){
    for(let i = 0 ; i < n ; i++){
        delayOneSec();
    }
}

delayNSec(5);
console.log("Hello World");