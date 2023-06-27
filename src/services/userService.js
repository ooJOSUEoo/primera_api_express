const boom = require("@hapi/boom")
const getConnection = require("../libs/postgres")

class UserService {
    constructor(){}

    async create(data){
        return data
    }

    async find(){
        const client = await getConnection()
        const resp = await client.query("SELECT * FROM tasks")
        return resp.rows
    }

    async findOne(id){
        return {id}
    }

    async update(id, data){
        return {id, data}
    }
}

module.exports = UserService