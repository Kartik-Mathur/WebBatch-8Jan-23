function maggiLaao(cb) {
    console.log("Maggi lene chale gaye");
    setTimeout(function () {
        console.log("Maggi Lekar aa gaye");
        cb(maggiKhaao);
    }, 2000);
}

function maggiBanao(cb) {
    console.log("Maggi Banana start");
    setTimeout(function () {
        console.log("Maggi Bann gai");
        cb();
    }, 2000);
}

function maggiKhaao() {
    console.log("Maggi Khana start");
    setTimeout(function () {
        console.log("Maggi Khana Samapt");
    }, 2000);
}

maggiLaao(maggiBanao);