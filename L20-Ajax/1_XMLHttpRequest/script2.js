const btn = document.querySelector('button');
const ul = document.querySelector('ul');

function getData(url) {
    return new Promise((resolve, reject) => {
        // 1. Create the XML Http Request Object
        let xml = new XMLHttpRequest();

        // 2. Setup krna request ko
        // let url = 'https://cat-fact.herokuapp.com/facts';
        xml.open('GET', url);

        // 3. Success hone par request ke kya krna h?
        xml.onload = (res) => {
            let data = JSON.parse(res.target.response);
            resolve(data); 
        }

        // 4. Faliure hone par request ke kya krna hai?
        xml.onerror = (err) => {
            reject(err);``
        }

        xml.send(); // Request bhej do
    })
}

btn.addEventListener('click', () => {
    getData ('https://cat-fact.herokuapp.com/facts')  
        .then((data)=>{
            ul.innerText = '';
            data.forEach((d)=>{
                // console.log(d.text)
                let li = document.createElement('li');
                li.innerText = d.text;
                ul.appendChild(li);
            })
        }).catch(err=>{
            console.log(err)
        })
})