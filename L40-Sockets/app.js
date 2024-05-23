const path = require('path');
const express = require('express');
const app = express();
const {createServer} = require('http');
const {Server} = require('socket.io');
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
    console.log(socket.id);
    socket.on('newuser',({socketId,name})=>{    
        userMap[socket.id] = name;

        socket.emit('useradded',{
            msg: "User added successfully",
            username: userMap[socket.id]
        });
    })
    
    socket.on('newmessage',({message,socketId})=>{
        console.log(message,socketId);
        io.emit('messagerecieved',{
            message,
            username: userMap[socketId],
            socketId: socket.id
        })
    })


});

httpServer.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});