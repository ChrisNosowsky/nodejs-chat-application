const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New Websocket Connection')

    socket.emit('message', "Welcome!")

    socket.broadcast.emit('message', 'A new user has joined')

    socket.on('sendMessage', (msg, callback) => {
        io.emit('message', msg)
        callback('Delivered')
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left!')
    })

    socket.on('sendLocation', (position) => {
        io.emit('message', `https://google.com/maps?q=${position.latitude},${position.longitude}`)
    })
})


server.listen(port, () => {
    console.log(`App is up on port ${port}!`)
})
