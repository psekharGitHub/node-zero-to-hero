require('dotenv').config()
require('express-async-errors')

//async error

const express = require('express')
const app = express()

const connectDB = require('./db/connect')   //importing the db connection
const productsRouter = require('./routes/products')              

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())

//routes
app.get('/', (req,res) => {
    res.send('<h1> Send API </h1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products', productsRouter) //pass router as 2nd parameter and base routing path as 1st param

//products route
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        //connect Db
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening to port: ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()