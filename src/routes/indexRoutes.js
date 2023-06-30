const express = require('express');
const productsRoutes = require('./productsRoutes')
const usersRoutes = require('./usersRoutes')
const customerRoutes = require('./customerRoutes')
const categoryRoutes = require('./categoryRoutes')

const routerAPI = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use("/products",productsRoutes)
  router.use("/users",usersRoutes)
  router.use("/customers",customerRoutes)
  router.use("/categories",categoryRoutes)
}

module.exports = routerAPI
