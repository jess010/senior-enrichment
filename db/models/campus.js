'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  image: {
    type: Sequelize.TEXT,
    validation: {
        isURL: true,
    }
  },

  date_added: {
    type: Sequelize.DATE,
    validation: {
      isDate: true,
    },
  }
})

module.exports = Campus
