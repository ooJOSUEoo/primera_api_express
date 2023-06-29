const { config } = require("./../config/config");


const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgresql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

module.exports = {
    development: {
        url: URI,
        dialect: 'postgresql',
    },
    production: {
        url: URI,
        dialect: 'postgresql',
    }
}