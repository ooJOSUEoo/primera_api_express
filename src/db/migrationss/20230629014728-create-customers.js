'use strict';

const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customerModel');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE)
  }
};
