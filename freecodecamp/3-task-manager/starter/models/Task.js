const mongoose = require('mongoose')

//In mongoose, a module is a wrapper for a schema
//providing structure to the data(specific data types)
const TaskSchema = new mongoose.Schema({
    //properties of schema with validation checks
    name: {
        type : String,
        required : [true, 'must provide a name'],                   
        trim : true,
        maxlength : [20, 'name cannot be more than 20 characters']
    },
    completed: {
        type : Boolean,
        default : false
    }
})

//export the schema
module.exports = mongoose.model('Task', TaskSchema)

