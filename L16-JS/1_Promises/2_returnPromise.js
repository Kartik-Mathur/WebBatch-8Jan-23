let url = 'mywebsite.com/movie.mp3';

let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let extension = url.split('.').pop();
        if (extension != 'mp4') return reject("Abey URL toh sahi dede");
        resolve("Hello");
    }, 2000);
})

p.then(function (msg) {
    console.log(msg)
    return "World";
}).then(function (newMsg) {
    console.log(newMsg)
}).catch(function (err) {
    console.log(err)
})

// p.then(function(msg){
//     console.log(msg)
//     return "World";
// }).catch(function(err){
//     console.log(err)
// }).then(function(newMsg){
//     console.log(newMsg)
// })
// .catch(function(err){
//     console.log(err)
// })