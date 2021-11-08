var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')    //sending data as one big file
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8') //reads data in chunks(more efficient)
    fileStream.on('open', () => {
      fileStream.pipe(res)  //pipe() pushes data from readStream to writeStream
    })                      //writes data in chunks
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)