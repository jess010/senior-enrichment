const express = require('express');
const router = express.Router();
const models = require('../db/models');

router.get('/', (req, res, next) => {
    res.send("hi there!")
})

module.exports = router
