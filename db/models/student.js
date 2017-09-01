'use strict';
const Sequelize = require('sequelize')
const db = require('../index.js')
const Campus = require('./Campus')


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
 }
, {
  defaultScope: {
    include: [
      { model: Campus }
    ]
  }
})

module.exports = Student
