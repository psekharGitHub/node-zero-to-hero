const asyncWrapper = require('../middleware/async')
const Task = require('../models/Task')

const getAllTasks = asyncWrapper(async (req,res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks:tasks }) 
})

//Removing the redundancies of using multiple try-catch blocks using a Wrapper called asyncWrapper
// //using Task.create() to make changes in the database
// const createTask = async (req,res) => {
//     try {
//         const task = await Task.create(req.body)
//         res.status(201).json({ task }) 
//     } catch (error) {
//         res.status(500).json({ msg : error })
//     }
// }

const createTask = asyncWrapper(async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task }) 
})


const getTask = asyncWrapper(async (req,res) => {
    const { id:taskId } = req.params
    const task = await Task.findOne({ _id:taskId })
    //this condition handles empty task
    if (!task) {
        return res.status(404).json({ msg:`No task with id: ${taskId}`})
    }
    res.status(200).json({task})
})

const deleteTask = asyncWrapper(async (req,res) => {
    const { id:taskId } = req.params
    const task = await Task.findOneAndDelete({ _id:taskId })
    if (!task) {
        return res.status(404).json({ msg:`No task with id: ${taskId}`})
    }
    res.status(200).json({ task })   
})

const updateTask = asyncWrapper(async (req,res) => {

    const { id:taskId } = req.params
    const task = await Task.findOneAndUpdate({ _id:taskId }, req.body, {
         new: true,
         runValidators: true
    })
    if (!task) {
        res.status(404).json({ msg:`No task with id: ${taskId}`})
    }
    res.status(200).json({ task })
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}