let socket = io();
console.log(socket);
let login = document.querySelector('.login');
let chatApplication = document.querySelector('.chat-application');

document.querySelector('.login-btn').addEventListener('click', (ev) => {
    let username = document.querySelector('.username').value;
    console.log(username)
    if (username.length > 0) {
        socket.emit('newuser', {
            socketId: socket.id,
            name: username
        })
    }
    else {
        alert('Please enter correct username');
    }
})

socket.on('newuserjoined', ({ msg }) => {
    console.log("Message ", msg);
})

socket.on('updatedetails', ({ msg, username, clients, clientsCount }) => {
    if (clientsCount)
        document.querySelector('.active-users').innerText = clientsCount;
    let allUsers = document.querySelector('.all-users-status');
    allUsers.innerText = '';
    clients.forEach(c => {
        if (c.id != socket.id) {
            let li = document.createElement('li');
            li.innerText = c.name;
            allUsers.appendChild(li);
        }
    });

})

socket.on('useradded', ({ msg, username, clients, clientsCount }) => {
    console.log(clients, clientsCount);
    if (clientsCount)
        document.querySelector('.active-users').innerText = clientsCount;
    login.style.display = 'none';
    chatApplication.style.display = 'block';
    let currentUser = document.querySelector('.current-user');
    currentUser.innerText = username;
})

document.querySelector('.send-button').addEventListener('click', () => {
    let messageInput = document.querySelector('.message-input');
    let message = messageInput.value
    if (message.length > 0) {
        messageInput.value = '';
        socket.emit('newmessage', {
            message: message,
            socketId: socket.id
        })
    }
})

socket.on('messagerecieved', ({ message, socketId, username, clients, clientCount }) => {
    let chats = document.querySelector('.chats');
    let chat = document.createElement('div');
    document.querySelector('.active-users').innerText = clientCount;
    chat.classList.add('chat');
    console.log(clients, clientCount)
    // chat.innerHTML = `<div class="chat-message">${message}</div>`;
    let chatMessage = document.createElement('div');
    chatMessage.classList.add('chat-message');

    if (socketId === socket.id) {
        chatMessage.innerText = `${message}`;
        chatMessage.classList.add('my-chat');
    }
    else {
        chatMessage.innerText = `${username} : ${message}`;
        chatMessage.classList.add('another-chat');
    }
    chat.appendChild(chatMessage);
    chats.appendChild(chat);
})


socket.on('updateDetailsAll', ({ msg, clients, clientsCount }) => {
    console.log(msg);
    if (clientsCount)
        document.querySelector('.active-users').innerText = clientsCount;
    let allUsers = document.querySelector('.all-users-status');
    allUsers.innerText = '';
    clients.forEach(c => {
        if (c.id != socket.id) {
            let li = document.createElement('li');
            li.innerText = c.name;
            allUsers.appendChild(li);
        }
    });
})