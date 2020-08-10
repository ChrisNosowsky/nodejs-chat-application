const socket = io()

socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Clicked')
    socket.emit('sendMessage', document.getElementById('message').value)
})

// socket.on('countUpdated', (count) => {
//     console.log('The count has been updated', count)
// })

// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('Clicked')
//     socket.emit('increment')
// })

