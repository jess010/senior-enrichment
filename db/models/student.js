'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.TEXT,
    validation: {
      isEmail: true
    },
  },

  address: {
    type: Sequelize.TEXT,
  },

  phone: {
    type: Sequelize.INTEGER,
    validation: {
      isNumeric: true
    }
  },

  dob: {
    type: Sequelize.DATE,
    validation: {
      isDate: true
    },
  }
}, {
  getterMethods: {},
  setterMethods: {},
})

module.exports = Student
