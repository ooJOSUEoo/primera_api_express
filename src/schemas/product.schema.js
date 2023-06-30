const Joy = require("joi");


const id = Joy.string().uuid()
const name = Joy.string().alphanum().min(3).max(15)
const price = Joy.number().integer().min(10)
const description = Joy.string()
const image = Joy.string().uri()

const createProductSchema = Joy.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    image: image.required()
})

const updateProductSchema = Joy.object({
    name: name,
    price: price,
    description: description,
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