function downloadMovie(url,cb) {
    let ext = url.split('/').pop().split('.').pop();
    if (ext != 'mp4') {
        throw new Error("Abey Link toh sahi dede");
    }
    else {
        setTimeout(function () {
            cb(url.split('/').pop());
        }, 2000);
    }
}

downloadMovie('myurl.com/avengers.mp4',function(movie){
    console.log(movie);
    compressMovie()
})