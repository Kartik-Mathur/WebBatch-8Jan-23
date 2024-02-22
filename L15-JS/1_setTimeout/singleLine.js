let id = setTimeout(function () {
    console.log("Hello World")
}, 5000, setTimeout(function () {
    clearTimeout(id);
}, 4000));