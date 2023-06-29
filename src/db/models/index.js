const { Customer, CustomerSchema } = require("./customerModel")
const { User, userSchema } = require("./userModel")


const setupModels = (sequelize) => {
    User.init(userSchema, User.config(sequelize))
    Customer.init(CustomerSchema, Customer.config(sequelize))

    Customer.associate(sequelize.models)
}

module.exports = setupModels