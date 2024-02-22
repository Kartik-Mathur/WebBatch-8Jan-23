// Yeh function promise kar raha hai movie download krke dega
// - FulFill: Movie download ho gai
// - Rejected: Movie due to x/y/z reason download nahi ho paai
function downloadMovie(url) {
    return new Promise(function (resolve, reject) {
        let ext = url.split('/').pop().split('.').pop();
        if(ext != 'mp4'){
            reject("Abey Sahi URL dede, Bhakk!");
        }
        else{
            setTimeout(function(){
                resolve(url.split('/').pop());
            },2000);    
        }
    })
}

// downloadMovie function ek promise return krta hai, downloadMovie is a promise
downloadMovie('myurl.com/avengers.mp3')
    .then(function (movie) {
        console.log(movie);
    }).catch(function (err) {
        console.log(err);
    })


