const Joy = require("joi");


const id = Joy.string().uuid()
const name = Joy.string().alphanum().min(3).max(15)
const price = Joy.number().integer().min(10)
const image = Joy.string().uri()

const createProductSchema = Joy.object({
    name: name.required(),
    price: price.required(),
    image: image.required()
})

const updateProductSchema = Joy.object({
    name: name,
    price: price,
    image: image
})

const getProductSchema = Joy.object({
    id: id.required()
})

module.exports = {
    createProductSchema,
    updateProductSchema,
    getProductSchema
}