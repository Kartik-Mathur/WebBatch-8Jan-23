module.exports = function(socket,io,userMap){
    socket.on('newuser', async ({ socketId, name }) => {
        userMap[socket.id] = name;
        let clients = [];
        let sockets = await io.fetchSockets();
        sockets.forEach(socket=>{
            if(userMap[socket.id]){
                clients.push({id: socket.id,name: userMap[socket.id]});
            }
        })
        console.log("Client to chat with",clients);
        socket.emit('useradded', {
            msg: "User added successfully",
            username: userMap[socket.id],
            clients,
            clientsCount: clients.length
        });

        socket.broadcast.emit('updatedetails',{
            msg: "New users are added!",
            clients,
            clientsCount: clients.length
        })
    })
}