let cartList = document.querySelector('.cart-list');

cartList.addEventListener('click',(ev)=>{
    ev.preventDefault();
    let item = ev.target;
    if(item.classList.contains('increaseQuantity')){
        // console.log(item);
        item = item.parentElement.parentElement;
        item = item.lastElementChild;
        // console.log(item)
        let id = item.getAttribute('id');
        console.log(id)
    }
    else if(item.classList.contains('decreaseQuantity')){
        item = item.parentElement.parentElement;
        item = item.lastElementChild;
        // console.log(item)
        let id = item.getAttribute('id');
        console.log(id)
        
    }
})