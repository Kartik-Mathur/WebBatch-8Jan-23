function download(url) {
    return new Promise(function (resolve, reject) {
        console.log("Downloading Starts from", url);
        setTimeout(function () {
            let extension = url.split('.').pop();
            if (['webp', 'png', 'jpg'].indexOf(extension) != -1) {
                let img = url.split('/').pop();
                resolve(img);
            }
            else {
                reject("Abey URL Toh sahi dede");
            }
        }, 2000);
    })
}

function compress(file) {
    return new Promise(function (resolve, reject) {
        console.log("Compression Starts of", file);
        setTimeout(function () {
            let compressedImg = file.split('.')[0] + '.zip';
            console.log("Compression Completed", compressedImg);

            resolve(compressedImg);
        }, 2000);
    })
}

function upload(file) {
    return new Promise(function (resolve, reject) {
        console.log("Uploading Starts of", file);
        setTimeout(function () {
            let newLink = 'http://newsite.com/' + file;
            console.log("Uploading Completed", newLink);
            resolve(newLink);
        }, 2000);
    })
}

download('http://randomurl.com/avengers.jpg')
    .then(function (img) {
        console.log("Download Completed", img);
        return img;
    })
    .then(compress)
    .then(upload)
    .then(function (newLink) {
        console.log("Everything Done", newLink);
    })
    .catch(function (err) {
        console.log(err);
    })