'use strict';
const { USER_TABLE, userSchema } = require('../models/userModel');
const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customerModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, userSchema)
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(CUSTOMER_TABLE)
  }
};
