require('dotenv').config()
require('express-async-errors')


const express = require('express')
const app = express()
require('dotenv').config()
//const dbConnect = require('./db/connect')

const mainRouter = require('./routes/main')
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')
const authMiddleware = require('./middleware/auth')


//middleware
app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1', mainRouter)

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)
app.use(authMiddleware)


const port = process.env.PORT || 3000

const start = async () => {
    try {
        //await dbConnect(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening at port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()
