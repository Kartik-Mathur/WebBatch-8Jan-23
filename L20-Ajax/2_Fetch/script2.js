const btn = document.querySelector('button');
const ul = document.querySelector('ul');

btn.addEventListener('click', () => {
    fetch('https://cat-fact.herokuapp.com/facts')
        .then(res => {
            return res.json()
        }).then(data => {
            ul.innerText = '';
            data.forEach((d) => {
                // console.log(d.text)
                let li = document.createElement('li');
                li.innerText = d.text;
                ul.appendChild(li);
            })
        })
        .catch(err => console.log(err));
})