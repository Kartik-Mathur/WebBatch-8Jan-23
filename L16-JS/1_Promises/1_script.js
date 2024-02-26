let p = new Promise(function (resolve, reject) {
    resolve(); // resolve is called immediately after creating the promise
})

setTimeout(function () {
    p.then(function (data) {
        console.log("Resolve Wala Function run ho gaya");
    }).catch(function (err) {
        console.log(err)
    })
}, 3000);

// Way - 1
/*
let p = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(); // Will be called after 5 seconds
    },5000);
})

p.then(function(data){
    console.log("Resolve Wala Function run ho gaya");
})
.catch(function(err){
    console.log(err)
})
*/