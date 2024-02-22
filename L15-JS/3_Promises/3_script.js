function maggiLekarAaunga() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let dukanKhuliHai = true;
            if (dukanKhuliHai) {
                resolve("Maggi Mill Gai");
            }
            else {
                reject("Maggi Nahi milli, dukan band hai");
            }
        }, 2000);
    })
}

maggiLekarAaunga()
.then(function(msg){
    console.log(msg)
})
.catch(function(err){
    console.log(err)
})