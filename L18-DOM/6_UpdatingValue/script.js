let cntValue = document.querySelector('.cntValue');
let reduceBtn = document.querySelector('.reduce');
let updateBtn = document.querySelector('.update');

updateBtn.addEventListener('click',()=>{
    // console.log("Update BTN clicked");
    // console.log(parseInt(cntValue.innerText)+2);
    // console.log((+cntValue.innerText)+2);
    // console.log(Number(cntValue.innerText)+2);
    cntValue.innerText = parseInt(cntValue.innerText)+1;
})

reduceBtn.addEventListener('click',()=>{
    // console.log("Reduce BTN clicked");
    cntValue.innerText = parseInt(cntValue.innerText)-1;
})