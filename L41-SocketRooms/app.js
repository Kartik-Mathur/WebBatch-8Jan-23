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


let userMap = {};

io.on("connection", (socket) => {

    socket.on('subscribecpp', () => {
        socket.join('cpp');
        io.to('cpp').emit('newcppjoin', {
            msg: 'A user subscribed to cpp group'
        })
    })

    socket.on('cppmsgsend', ({msg}) => {
        io.to('cpp').emit('cppmsgrec', {
            msg
        })
    })


});

httpServer.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});