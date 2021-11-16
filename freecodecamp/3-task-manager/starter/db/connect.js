const mongoose = require('mongoose')

//For keeping the username and password of database safe, we keep it in .env file
const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB

// //returns a promise
// mongoose.connect(connectionString)
//                     .then(() => {
//                         console.log('Connected to Db...');
//                     })
//                     .catch((err) => console.log('Some Error Occured'))