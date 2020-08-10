const socket = io()

socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Clicked')
    socket.emit('sendMessage', document.getElementById('message').value)
})
