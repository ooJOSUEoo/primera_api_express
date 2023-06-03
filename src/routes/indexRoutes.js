const express = require('express');
const productsRoutes = require('./productsRoutes')

const routerAPI = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use("/products",productsRoutes)
}

module.exports = routerAPI
