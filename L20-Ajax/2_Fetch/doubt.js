const btn = document.querySelector('button');
const ul = document.querySelector('ul');

function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => {
                return res.json()
            }).then(data => {
                resolve(data);
            })
            .catch(err => reject(err));
    })
}


btn.addEventListener('click', () => {
    getData('https://cat-fact.herokuapp.com/facts')
        .then((data) => {
            ul.innerText = '';
            data.forEach((d) => {
                let li = document.createElement('li');
                li.innerText = d.text;
                ul.appendChild(li);
            })
        }).catch(err => {
            console.log(err);
        })

})