const { notFound, conflict } = require("@hapi/boom")
const faker = require("faker")
const pool = require("../libs/postgresPool")
const {models} = require("../libs/sequelize")

class ProductService {

    constructor(){
        this.products = []
        this.generate()
        this.pool = pool
        this.pool.on("error", (err) => {
            console.log(err);
        }) 
    }

    async generate(){
        const limit = 100
    }

    async create(data){
        const newProduct = await models.Product.create(data)
        return newProduct
    }

    async find(query){
        const options = {
            include: ['category']
        }
        const {limit, offset} = query
        if(limit && offset){
            options.limit = limit
            options.offset = offset
        }
        const products = await models.Product.findAll(options)
        return products
    }

    async findOne(id){
        const product = await models.Product.findByPk(id)
        if(!product){
            throw notFound("Product not found")
        }
        if(product.isBlock){
            throw conflict("Product is blocked")
        }
        return product
    }

    async update(id, data){
        const index = this.products.findIndex(product => product.id === id)
        if(index === -1){
            throw notFound("Product not found")
        }
        const product = this.products[index]
        this.products[index] = {id, product, ...data}
        return this.products[index]
    }

    async delete(id){{
        const index = this.products.findIndex(product => product.id === id)
        if(index === -1){
            return null
        }
        this.products.splice(index, 1)
        return {message: 'deleted'}
    }}
}

module.exports = ProductService