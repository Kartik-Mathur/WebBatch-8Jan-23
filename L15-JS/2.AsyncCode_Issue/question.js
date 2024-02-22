function download(cb){
    console.log("Download Starts");
    setTimeout(function(){
        console.log("Download Ends");
        cb(upload);
    },2000);
    
} // 2 sec, asynchronous


function compress(cb){
    console.log("Compression Starts");
    setTimeout(function(){
        console.log("Compression Ends");
        cb();
    },2000);
} // 2 sec, asynchronous


function upload(){
    console.log("Upload Starts");
    setTimeout(function(){
        console.log("Upload Ends");
    },2000);
} // 2 sec, asynchronous

download(compress);
// download -> compress -> upload