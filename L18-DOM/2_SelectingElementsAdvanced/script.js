// 1. using querySelector: Will give you only one element
let movies = document.querySelector('.movie');
// let movies = document.querySelectorAll('.movie');
console.log(movies);


// Selecting id using querySelector
let gadar = document.querySelector('#gadar');
console.log(gadar);

// TagName se lekar aana hai
let div = document.querySelector('div');
console.log(div);

// Pick the li item that has the class ironman
let ironman = document.querySelector('li.ironman');
console.log(ironman);