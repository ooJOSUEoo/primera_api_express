'use strict';
const { USER_TABLE, userSchema } = require('../models/userModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, userSchema)

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE)
  }
};
