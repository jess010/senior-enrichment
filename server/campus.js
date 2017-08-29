const express = require('express')
const router = express.Router()
const models = require('../db/models')
const Campus = models.Campus

// router.get('/', function (req, res, next) {
//     res.send("hi there - campus-style!")
// })

router.get('/', function (req, res, next) {
    Campus.findAll({})
    .then(campuses => {
        res.json(campuses)
    })
    .catch(next)
})

router.get('/:id', function (req, res, next) {
    Campus.findById(req.params.id)
    .then(campus => {
        res.json(campus)
    })
    .catch(next)
})

router.get('/:id', function (req, res, next) {
    Campus.findById(req.params.id)
    .then(campus => {
        res.json(campus)
    })
    .catch(next)
})

router.post('/', function (req, res, next) {
    Campus.create({
        name: req.body.name,
        image: req.body.image
    })
    .then(values => values[0])
    .then(campus => res.json(campus))
    .catch(next)
})

module.exports = router

