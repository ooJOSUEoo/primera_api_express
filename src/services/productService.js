const faker = require("faker")

class ProductService {

    constructor(){
        this.products = []
        this.generate()
    }

    async generate(){
        const limit = 100
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.product(),
                price: faker.commerce.price(),
                image: faker.image.imageUrl()
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
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products)
            }, 1000)
        })
    }

    async findOne(id){
        const a = this.exe()
        return this.products.find(product => product.id === id)
    }

    async update(id, data){
        const index = this.products.findIndex(product => product.id === id)
        if(index === -1){
            throw new Error('Product not found')
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