const http = require('http')
const { readFileSync } = require('fs')
const homepage = readFileSync('./index.html')   //read html file into server

const server = http.createServer((req, res) => {   //createServer method has callback(req,res)
    //console.log(req.method);
    console.log('user hit the server');
    const url = req.url;
    //home page
    if (url === '/') {
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(homepage)
        res.end()
    } 
    //about page
    else if (url === '/about') {
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('<h1>This is About Page</h1>')
        res.end()        
    } 
    //404
    else {
        res.writeHead(404, {'content-type' : 'text/html'})
        res.write('<h1>Oops!! Page Not Found</h1>')
        res.end()   
    }
})

server.listen(5000)     //listen at port 5000 for the request for response