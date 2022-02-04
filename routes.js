const express = require('express');
const router = express.Router();

// importar los controladores
const customersController = require('./controllers/CustomersController');

module.exports = () => {

  // definir las rutas

  // clientes
  router.get('/customers', customersController.list);
  router.post('/customers', customersController.add);
  router.get('/search', customersController.search)
  return router;
};
