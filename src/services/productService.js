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

    create(){}

    find(){
        return this.products
    }

    findOne(id){
        return this.products.find(product => product.id === id)
    }

    update(){}

    delete(){}
}

module.exports = ProductService