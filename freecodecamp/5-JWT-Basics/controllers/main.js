const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')
//const CustomAPIError = require('../errors/custom-error')

const login = async (req,res) => {
    const { username,password } = req.body

    if (!username || !password) {
        throw new BadRequestError('Please provide email and password')
    }
    //just for demo, normally provided by DB !!
    const id = new Date().getDate()
    //try to keep payload small for better experience
    const token = jwt.sign({ username,id }, process.env.JWT_SECRET, {expiresIn:'30d'})

    res.status(200).json({ msg:'user created',token })
}

const dashboard = async (req,res) => {
    console.log(req.user)

    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg:`Hello, ${req.user.username}`,
                          secret: `This is your authorized data, your locky number is ${luckyNumber}`})

}

module.exports = { login,dashboard }