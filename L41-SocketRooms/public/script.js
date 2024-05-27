let cppBtn = document.querySelector('.cppBtn');
let javaBtn = document.querySelector('.javaBtn');
let pythonBtn = document.querySelector('.pythonBtn');
let chatBoxes = document.querySelectorAll('.chatbox')

cppBtn.addEventListener('click',(ev)=>{
    let btnName = ev.target.innerText.toLowerCase();
    // console.log(btnName);
    chatBoxes.forEach(chatBox => {
        if(chatBox.getAttribute('id')==btnName){
            chatBox.classList.remove('hidden');
        }
        else{
            chatBox.classList.add('hidden');
        }
    })
})

javaBtn.addEventListener('click',(ev)=>{
    let btnName = ev.target.innerText.toLowerCase();
    // console.log(btnName);
    chatBoxes.forEach(chatBox => {
        if(chatBox.getAttribute('id')==btnName){
            chatBox.classList.remove('hidden');
        }
        else{
            chatBox.classList.add('hidden');
        }
    })
})

pythonBtn.addEventListener('click',(ev)=>{
    let btnName = ev.target.innerText.toLowerCase();
    // console.log(btnName);
    chatBoxes.forEach(chatBox => {
        if(chatBox.getAttribute('id')==btnName){
            chatBox.classList.remove('hidden');
        }
        else{
            chatBox.classList.add('hidden');
        }
    })
})