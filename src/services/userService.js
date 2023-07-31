const boom = require("@hapi/boom")
const getConnection = require("../libs/postgres")
const {models} = require("../libs/sequelize")
const bcrypt = require('bcrypt');


class UserService {
    constructor(){}

    async create(data){
        const hash = await bcrypt.hash(data.password, 10);
        const newUser = await models.User.create({
        ...data,
        password: hash
        });
        delete newUser.dataValues.password;
        return newUser
    }

    async find(){
        const resp = await models.User.findAll({
            include: ['customer']
        })
        return resp
    }

    async findByEmail(email) {
        const rta = await models.User.findOne({
          where : { email }
        });
        return rta;
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