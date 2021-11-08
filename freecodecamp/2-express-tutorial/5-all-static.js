const express = require('express')
const path = require('path')

const app = express()
//set up static and middleware
app.use(express.static('./public'))

// //adding to static assets
// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res) => {
    res.status(404).send('Oops!! File not found')
})

app.listen(5000, () => {
    console.log('Listening at port 5000...');
})