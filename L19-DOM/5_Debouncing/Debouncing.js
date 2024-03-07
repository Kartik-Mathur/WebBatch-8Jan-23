let body = document.querySelector('body');
let navBar = document.querySelector('.navBar');

function scrollKaFunction() {
    console.log("Scrolling")
}

window.addEventListener('scroll', debounce(scrollKaFunction, 1000));

// window.addEventListener('scroll',function)

function debounce(fun, delay) {
    let id;
    return function () {
        console.log("Clearing Interval",id);
        clearTimeout(id);
        id = setTimeout(()=>{
            fun();
        },delay);
        console.log("New Interval id",id);
    }
}