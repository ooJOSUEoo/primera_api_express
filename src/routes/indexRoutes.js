const router = require('./productsRoutes')

const routerAPI = (app) => {
  app.use("/products",router)
}

module.exports = routerAPI
