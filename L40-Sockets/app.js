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


io.on("connection", (socket) => {
    // ...
});

httpServer.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});