const { notFound, conflict } = require("@hapi/boom")
const faker = require("faker")
const pool = require("../libs/postgresPool")
const sequelize = require("../libs/sequelize")

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
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.product(),
                price: faker.commerce.price(),
                image: faker.image.imageUrl(),
                isBlock: faker.datatype.boolean()
            })
        }
    }

    async create(data){
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct)
        return newProduct
    }

    async find(){
        const query = 'SELECT * FROM tasks'
        const [data] = await sequelize.query(query)
        return data
    }

    async findOne(id){
        const product = this.products.find(product => product.id === id)
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