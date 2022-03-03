const express = require('express');
const router = express.Router();

// importar los controladores
const customersController = require('./controllers/CustomersController');
const productCategoriesController = require('./controllers/ProductCatetegoriesController');
const productsController = require('./controllers/ProductsController');
const imagesController = require('./controllers/ImagesController');

module.exports = () => {

  // definir las rutas

  // clientes
  router.get('/customers', customersController.list);
  router.post('/customers', customersController.add);
  router.post('/filtrar', customersController.filtrar);
  router.get('/search', customersController.search);

  // categorías de productos
  router.get('/product-categories', productCategoriesController.list);
  router.post('/product-categories', productCategoriesController.add);
  router.get('/product-categories/:id', productCategoriesController.show);

  // productos
  router.get('/products', productsController.list);
  router.post('/products', productsController.add);
  router.get('/products/:id', productsController.show);

  // images
  // midleware
  router.post('/images', imagesController.fileUpload, imagesController.add);

  return router;
};
