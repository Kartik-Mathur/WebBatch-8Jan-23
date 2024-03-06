let btn = document.querySelector('.btn');
let movieList = document.querySelector('.movieList');

let movies = [
    "Avengers",
    "Thor",
    "Ironman",
    "loki",
    "Gadar"
];

let imgLinks = [
    'https://i.imgflip.com/2/3q84ls.jpg',
    "https://images.unsplash.com/photo-1682695796795-cc287af78a2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1709625509094-7947968103ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1708848504369-55f60bc664e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1607317146126-64b09b69eb4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVtZXxlbnwwfHwwfHx8MA%3D%3D"
]

let i = 0;

btn.addEventListener('click', () => {
    if (i == movies.length) {
        let url = imgLinks[Math.floor((Math.random() * imgLinks.length))];
        let img = document.createElement('img');
        img.setAttribute('src', url);
        movieList.appendChild(img);
        i++;
    }
    else if (i < movies.length) {
        let li = document.createElement('li');
        li.innerText = movies[i];
        movieList.appendChild(li);
        i++;
    }
})