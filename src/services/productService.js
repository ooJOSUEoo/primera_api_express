const faker = require("faker")

class ProductService {

    constructor(){
        this.products = []
        this.generate()
    }

    generate(){
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

    create(data){
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct)
        return newProduct
    }

    find(){
        return this.products
    }

    findOne(id){
        return this.products.find(product => product.id === id)
    }

    update(id, data){
        const index = this.products.findIndex(product => product.id === id)
        if(index === -1){
            return null
        }
        const product = this.products[index]
        this.products[index] = {id, product, ...data}
        return this.products[index]
    }

    delete(id){{
        const index = this.products.findIndex(product => product.id === id)
        if(index === -1){
            return null
        }
        this.products.splice(index, 1)
        return {message: 'deleted'}
    }}
}

module.exports = ProductService