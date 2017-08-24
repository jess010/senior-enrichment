const express = require('express')
const router = express.Router()
const models = require('../db/models')

router.get('/', function (req, res, next) {
    res.send("hi there - campus-style!")
})

module.exports = router

