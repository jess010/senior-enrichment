'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('Student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.TEXT,
    validation: {
        isEmail: true
    }
  },
}, {
  getterMethods: {},
  setterMethods: {}
})
