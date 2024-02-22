let maggiLekarAaunga = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let dukanKhuliHai = false;
        if (dukanKhuliHai) {
            resolve("Maggi Mill Gai");
        }
        else {
            reject("Maggi Nahi milli");
        }
    }, 2000);
})


maggiLekarAaunga.then(function(data){
    console.log(data);
})
.catch(function(msg){
    console.log(msg);
})