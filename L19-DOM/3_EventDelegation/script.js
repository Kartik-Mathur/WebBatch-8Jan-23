let itemList = document.querySelectorAll('.item');
let container = document.querySelector('.container');
console.log(itemList);

// Loop laga kar har ek li par event lagana padega
// itemList.forEach((item) => {
//     item.addEventListener('click', () => {
//         console.log(item.innerText);
//     })
// })

container.addEventListener('click',(ev)=>{
    // console.log(ev);
    // console.log(ev.target)
    let item = ev.target;
    console.log(item.innerText);
})