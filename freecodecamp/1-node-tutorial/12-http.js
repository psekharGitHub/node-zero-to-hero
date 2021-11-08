const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    } else if (req.url === '/about') {
        res.end('This is a nodeJS app')
    } else {
    res.end(`<h1>Oops!!</h1>
             <p>We could not find your page</p>
             <a href='/'>back home</a>`)
    }
})

server.listen(5000)