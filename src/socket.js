const socketIO = require('socket.io')

const connect = (server)=>{
    const io = socketIO.listen(server);
    io.on('connection',(socket)=>{
        console.log('new connection', socket.id)
        socket.on('message', data=>{
            io.sockets.emit('message', data)
            console.log(data)
        })

        socket.on('typing', typing=>{
            socket.broadcast.emit('typing', typing)
        })
    })
}

module.exports = {
    connect
}