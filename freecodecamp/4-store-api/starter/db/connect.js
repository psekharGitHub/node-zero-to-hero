const mongoose = require('mongoose')

//For keeping the username and password of database safe, we keep it in .env file
const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB