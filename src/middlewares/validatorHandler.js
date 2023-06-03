const { badRequest } = require("@hapi/boom")


const validatorHandler = (schema, property) => {
    return (req, res, next) => {
        const data = req[property]
        const {error} = schema.validate(data)
        if(error){
            next(badRequest(error))
        }
        next()
    }
}

module.exports = validatorHandler