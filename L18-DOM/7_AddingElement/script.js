let btn = document.querySelector('button');
let movieList = document.querySelector('.movieList');

let movies = [
    "Avengers",
    "IronMan",
    "Batman",
    "Thor",
    "Gadar"
];

let i = 0;

btn.addEventListener('click', () => {
    if (i == movies.length) {
        let url = 'https://i.imgflip.com/2/3q84ls.jpg';
        movieList.innerHTML += `<li> 
            <img src=${url}>
        </li>`
        i++;
    }
    else if(i<movies.length){
        movieList.innerHTML += `<li>${movies[i]}</li>`
        // movieList.innerHTML += "<li> " + movies[i] + "</li>";
        // console.log(movieList.innerHTML);
        i++;
    }
})