const express = require('express')
const app = express()
//const logger = require('../logger')   //we can import logger snippet as a seperate file also
//app.use(logger)
//app.use('/api', logger)                       //mounts a specified middleware function to a specified path


//req => middleware => res
app.get('/', (req,res) => {
    res.send('Home')
})

const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    //res.send('Testing')           //sending own response
    //must pass current response to next middleware, unless we are teminating
    //the process by sending your own response from this middleware itself
    next()
}

app.get('/about', logger, (req,res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('Server is listening at port 5000');
})