const express = require('express')
const router = express.Router()
const models = require('../db/models')
const Campus = models.Campus

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
    Campus.create(req.body)
    // .then(res => values[0])
    .then(campus => res.json(campus))
    .catch(next)
})

router.put('/:id', function (req, res, next) {
    Campus.findById(req.params.id)
    .then(campus => campus.update(req.body))
    .then(() => res.sendStatus(200))
    .catch(next)
})

router.delete('/:id', function (req, res, next) {

  Campus.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router

