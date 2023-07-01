const Joy = require("joi");


const id = Joy.number().integer()
const name = Joy.string().alphanum().min(3).max(15)
const price = Joy.number().integer().min(10)
const description = Joy.string()
const image = Joy.string().uri()
const categoryId = Joy.number().integer()

const limit = Joy.number().integer()
const offset = Joy.number().integer()

const price_min = Joy.number().integer()
const price_max = Joy.number().integer()

const createProductSchema = Joy.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    image: image.required(),
    categoryId: categoryId.required()
})

const updateProductSchema = Joy.object({
    name: name,
    price: price,
    description: description,
    image: image,
    categoryId: categoryId
})

const getProductSchema = Joy.object({
    id: id.required()
})

const queryProductSchema = Joy.object({
    limit,
    offset,
    price,
    price_min,
    price_max: price_max.when('price_min', {
        is:Joy.number().integer(),
        then: Joy.required()
    })
})

module.exports = {
    createProductSchema,
    updateProductSchema,
    getProductSchema,
    queryProductSchema
}