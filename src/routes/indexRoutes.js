const express = require('express');
const productsRoutes = require('./productsRoutes')
const usersRoutes = require('./usersRoutes')

const routerAPI = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use("/products",productsRoutes)
  router.use("/users",usersRoutes)
}

module.exports = routerAPI
