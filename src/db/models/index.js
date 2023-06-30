const { Category, CategorySchema } = require("./categoryModel")
const { Customer, CustomerSchema } = require("./customerModel")
const { Order, OrderSchema } = require("./orderModel")
const { Product, ProductSchema } = require("./productModel")
const { User, userSchema } = require("./userModel")


const setupModels = (sequelize) => {
    User.init(userSchema, User.config(sequelize))
    Customer.init(CustomerSchema, Customer.config(sequelize))
    Category.init(CategorySchema, Category.config(sequelize))
    Product.init(ProductSchema, Product.config(sequelize))
    Order.init(OrderSchema, Order.config(sequelize))

    User.associate(sequelize.models)
    Customer.associate(sequelize.models)
    Category.associate(sequelize.models)
    Product.associate(sequelize.models)
    Order.associate(sequelize.models)
}

module.exports = setupModels