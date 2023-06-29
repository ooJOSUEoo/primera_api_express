'use strict';
const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customerModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(CUSTOMER_TABLE, 'userId', CustomerSchema.userId)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(CUSTOMER_TABLE, 'userId')
  }
};
