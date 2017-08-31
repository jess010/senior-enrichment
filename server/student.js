const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Student = models.Student


router.get('/', function (req, res, next) {
    Student.findAll({})
    .then(students => {
        res.json(students)
    })
    .catch(next)
})

router.get('/:id', function (req, res, next) {
    Student.findById(req.params.id)
    .then(student => {
        res.json(student)
    })
    .catch(next)
})

router.get('/:id', function (req, res, next) {
    Student.findById(req.params.id)
    .then(student => {
        res.json(student)
    })
    .catch(next)
})


router.post('/', function (req, res, next) {
    Student.create({
        name: req.body.name
    })
    .then(values => values[0])
    .then(student => res.json(student))
    .catch(next)
})

router.put('/:id', function (req, res, next) {
    // Assuming that ID is not allowed to be changed by user
    Student.findById(req.params.id)
    .then(student => student.update(req.body))
    .catch(next)
})

router.delete('/:id', function (req, res, next) {
  Student.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router
