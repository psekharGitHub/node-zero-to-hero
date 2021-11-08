const express = require('express')
const router = express.Router()

router.post('/', (req,res) => {
    const { name } = req.body
    console.log(req.body);
    if (!name) {
        return res
          .status(400)
          .json({ success: false, msg: 'please provide name value' })
      }
      res.status(201).json({ success: true, person: name })
  })

  module.exports = router