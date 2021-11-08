const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World')
})

server.listen(5000, () => {
    console.log('Server listening on port: 5000 . . .');
})

//listen is an async function, which keeps on listening at port 5000 and fires event of
//createServer whenever there is a server request