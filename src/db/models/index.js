const { User, userSchema } = require("./userModel")


const setupModels = (sequelize) => {
    User.init(userSchema, User.config(sequelize))
}

module.exports = setupModels