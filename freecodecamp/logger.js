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

module.exports = logger