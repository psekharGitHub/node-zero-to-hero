const http = require('http')

http.createServer(function(request, response){
    response.writeHead(200, {'content-type': 'text/html'})
    response.end("<h1>Hello World</h1>")
}).listen(1234)

console.log('Node.js web server at port 1234 is running..')