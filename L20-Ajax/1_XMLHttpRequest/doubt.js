const btn=document.querySelector('button');
const ul=document.querySelector('ul');

// creare the xml http request
let xml= new XMLHttpRequest();

// setup krna request ko
let url='https://cat-fact.herokuapp.com/facts'
xml.open('GET',url);

// success hone par request ka kya krna hai?
xml.onload=(res)=>{
    let data= JSON.parse(res.target.response);
    data.forEach((d) => {
        let li=document.createElement('li');
        li.innerText = d.text;
        ul.appendChild(li);
    });
}

xml.onerror = (err) =>{
    console.log(err);
}

btn.addEventListener('click',()=>{
    xml.send();
})