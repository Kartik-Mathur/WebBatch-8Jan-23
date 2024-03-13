const btn = document.querySelector('button');
const ul = document.querySelector('ul');

// 1. Create the XML Http Request Object
let xml = new XMLHttpRequest();

// 2. Setup krna request ko
let url = 'https://cat-fact.herokuapp.com/facts';
xml.open('GET', url);

// 3. Success hone par request ke kya krna h?
xml.onload = (res) => {
    let data = JSON.parse(res.target.response);
    // console.log(data);
    data.forEach((d)=>{
        // console.log(d.text)
        let li = document.createElement('li');
        li.innerText = d.text;
        ul.appendChild(li);
    })
}

// 4. Faliure hone par request ke kya krna hai?
xml.onerror = (err) => {
    console.log(err);
}

btn.addEventListener('click', () => {
    xml.send(); // To send request we have to do this
})