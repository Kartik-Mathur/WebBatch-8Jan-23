let cppBtn = document.querySelector('.cppBtn');
let javaBtn = document.querySelector('.javaBtn');
let pythonBtn = document.querySelector('.pythonBtn');
let chatBoxes = document.querySelectorAll('.chatbox');
let cppChatBtn = document.querySelector('.cppChatBtn');
let cppMessage = document.querySelector('.cppMessage');

let socket = io();

cppBtn.addEventListener('click', (ev) => {
    let btnName = ev.target.innerText.toLowerCase();
    // console.log(btnName);
    chatBoxes.forEach(chatBox => {
        if (chatBox.getAttribute('id') == btnName) {
            chatBox.classList.remove('hidden');
        }
        else {
            chatBox.classList.add('hidden');
        }
    })

    socket.emit('subscribecpp', {
        socketId: socket.id
    });

    socket.on('newcppjoin', ({ msg }) => {
        console.log(msg)
    })

})

cppChatBtn.addEventListener('click', (ev) => {
    let msg = cppMessage.value;
    socket.emit('cppmsgsend', {
        msg: msg,
        socketId: socket.id
    })
})

socket.on('cppmsgrec',({msg})=>{
    let cppchatBox = document.querySelector('.cppchatBox');
    let li = document.createElement('li');
    li.innerText = msg;
    cppchatBox.appendChild(li);
})



javaBtn.addEventListener('click', (ev) => {
    let btnName = ev.target.innerText.toLowerCase();
    // console.log(btnName);
    chatBoxes.forEach(chatBox => {
        if (chatBox.getAttribute('id') == btnName) {
            chatBox.classList.remove('hidden');
        }
        else {
            chatBox.classList.add('hidden');
        }
    })
})

pythonBtn.addEventListener('click', (ev) => {
    let btnName = ev.target.innerText.toLowerCase();
    // console.log(btnName);
    chatBoxes.forEach(chatBox => {
        if (chatBox.getAttribute('id') == btnName) {
            chatBox.classList.remove('hidden');
        }
        else {
            chatBox.classList.add('hidden');
        }
    })
})