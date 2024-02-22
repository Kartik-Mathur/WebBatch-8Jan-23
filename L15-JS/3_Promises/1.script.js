// Syntax
// let p = new Promise(function(resolve,reject){});
// resolve ko call krna mtlb fulfill ho gaya
// reject ko call krna mtlb fail ho gaya

// p.then(resolve_ki_definition,reject_ki_definition);
// p.then(resolve_ki_definition).catch(reject_ki_definition);

let kyaVaadaPooraHua = false;

let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (kyaVaadaPooraHua) {
            resolve("Vaada Poora Kar diya");
        }
        else {
            reject("Aisi Taisi kardi vaade ki");
        }
    }, 5000);
})

p.then(function (msg) {
    console.log("Message aaya hai", msg);
})
    .catch(function (err) {
        console.log("Error aaya hai", err);
    })

// p.then(function (msg) {
//     console.log("Message aaya hai", msg);
// }, function (err) {
//     console.log("Error aaya hai", err);
// });

