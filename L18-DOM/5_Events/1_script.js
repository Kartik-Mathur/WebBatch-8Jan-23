let btn = document.querySelector('button');
let para = document.querySelector('.para');

console.log(btn);
console.log(para);
btn.onclick = ()=>{
    console.log("Clicked");
}

btn.onclick = ()=>{
    console.log("I am Clicked");
}

para.ondblclick = ()=>{
    console.log("I am double CLicked");
}

// para.onmouseenter = ()=>{
//     para.classList.add('mouse-enter');
// }

// para.onmouseleave = ()=>{
//     para.classList.remove('mouse-enter');
// }