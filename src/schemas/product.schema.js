const Joy = require("joi");


const id = Joy.string().uuid()
const name = Joy.string().alphanumeric().min(3).max(15)
const price = Joy.number().integer().min(10)

const createProductSchema = Joy.object({
    name: name.required(),
    price: price.required()
})

const updateProductSchema = Joy.object({
    name: name,
    price: price
})

const getProductSchema = Joy.object({
    id: id.required()
})

module.exports = {
    createProductSchema,
    updateProductSchema,
    getProductSchema
}