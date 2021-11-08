const http = require('http')

// const server = http.createServer((req, res)=>{
//     res.end('Welcome')
// })
//Using custom event emitter
const server = http.createServer()

//emits request event
//subscribe to it / listen for it / respond to it
server.on('request', (req,res) => {                 //on function of custom Emitter
    res.end('Welcome')
})

server.listen(5000)