const boom = require("@hapi/boom")
const getConnection = require("../libs/postgres")
const {models} = require("../libs/sequelize")

class UserService {
    constructor(){}

    async create(data){
        return data
    }

    async find(){
        const resp = await models.User.findAll()
        return resp
    }

    async findOne(id){
        return {id}
    }

    async update(id, data){
        return {id, data}
    }
}

module.exports = UserService