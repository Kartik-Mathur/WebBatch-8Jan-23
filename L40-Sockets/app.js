const path = require('path');
const express = require('express');
const app = express();
const { createServer } = require('http');
const { Server } = require('socket.io');
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });
const PORT = 4444;

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// emit : Se event ko send krte hai
// on: Se event ko listen krte hai

let userMap = {};

io.on("connection", (socket) => {
    // console.log(io.sockets.sockets);
    // console.log(io.engine.clientsCount);
    // console.log(socket.id);
    socket.on('newuser', ({ socketId, name }) => {
        userMap[socket.id] = name;
        let clients = [];
        io.sockets.sockets.forEach(c => clients.push(c.id));
        console.log("Current Clients: ",clients);
        socket.emit('useradded', {
            msg: "User added successfully",
            username: userMap[socket.id],
            clients
        });
    })

    socket.on('newmessage', ({ message, socketId }) => {
        // console.log(message, socketId);
        let clients = [];
        io.sockets.sockets.forEach(c => clients.push({
            "name":userMap[c.id],
            "id":c.id,
            clientCount: io.engine.clientsCount
        }));

        console.log("Current Clients: ",clients);
        io.emit('messagerecieved', {
            message,
            username: userMap[socketId],
            socketId: socket.id,
            clients,
            clientCount: io.engine.clientsCount
        })
    })


});

httpServer.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});