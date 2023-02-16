const express = require('express');
const CategoryAdmin = require('../controllers/categoryAdmin');
const ControllerProductAdmin = require('../controllers/productAdmin');
const { authentication } = require('../middlewares/auth');
const routes = express.Router();
const adminRoutes = require('./admin');

routes.use(adminRoutes);
routes.use(authentication);
// route for get all product admin
routes.get('/categories', CategoryAdmin.getAllCategory);
routes.post('/categories', CategoryAdmin.addCategory);
routes.delete('/categories/:id', CategoryAdmin.deleteCategory);
// route for get product by id admin
routes.get('/', ControllerProductAdmin.getAllProduct);
routes.post('/add', ControllerProductAdmin.addProduct);
routes.get('/:id', ControllerProductAdmin.getProductById);
routes.put('/:productId', ControllerProductAdmin.editProduct);
routes.delete('/:productId', ControllerProductAdmin.deleteProduct);

// route for get all product user
// route for get product by slug user
module.exports = routes;
