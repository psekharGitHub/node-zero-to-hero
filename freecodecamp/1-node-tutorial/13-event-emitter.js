const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Data received: ${name} ${id}`)
})

customEmitter.emit('request', 'john', 34)