const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')                 //importing the db connection
require('dotenv').config()                                //import dotenv package
const errorHandlerMiddleware = require('./middleware/error-handler')        //custom response
//const notFound = require('./middleware/not-found')        //custom response

//middleware
app.use(express.static('./public'))
app.use(express.json())


//app.use(notFound)

const port = 3000

app.use('/api/v1/tasks', tasks)     //base route that is used in all different routes
app.use(errorHandlerMiddleware)     //error handler should always be at the end of your
                                    //application stack. Apparently it means not only 
                                    //after all app.use() but also after all your app.get
                                    //and app.post() calls.
                                    
//routes
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)      
        app.listen(port, console.log("Server is listening at port 3000"))
    } catch (error) {
        console.log(error);
    }
}


start()
