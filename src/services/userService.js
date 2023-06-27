const boom = require("@hapi/boom")
const getConnection = require("../libs/postgres")
const {models} = require("../libs/sequelize")

class UserService {
    constructor(){}

    async create(data){
        const newUser = await models.User.create(data)
        return newUser
    }

    async find(){
        const resp = await models.User.findAll()
        return resp
    }

    async findOne(id){
        const user = await models.User.findByPk(id)
        if(!user){
            throw boom.notFound("User not found")
        }
        return user
    }

    async update(id, data){
        const user = await this.findOne(id)
        const resp = await user.update(data)
        return resp
    }

    async delete(id){
        const user = await this.findOne(id)
        const resp = await user.destroy()
        return resp
    }
}

module.exports = UserService