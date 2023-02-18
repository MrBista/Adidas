const express = require('express');
const CategoryAdmin = require('../controllers/categoryAdmin');
const CategoryUser = require('../controllers/categoryUser');
const ControllerProductAdmin = require('../controllers/productAdmin');
const ControllerProductUser = require('../controllers/productUser');
const { authentication } = require('../middlewares/auth');
const routes = express.Router();
const adminRoutes = require('./admin');

routes.use(adminRoutes);
routes.get('/pub', ControllerProductUser.getAllProduct);
routes.get('/pub/:slug', ControllerProductUser.getProductById);
routes.get('/pub/categories', CategoryUser.getAllCategory);
routes.use(authentication);
// route for get all product admin
routes.get('/categories', CategoryAdmin.getAllCategory);
routes.post('/categories', CategoryAdmin.addCategory);
routes.delete('/categories/:id', CategoryAdmin.deleteCategory);
routes.get('/categories/:id', CategoryAdmin.getCategoryById);
routes.put('/categories/:id', CategoryAdmin.editCategory);

// route for get product by id admin
routes.get('/', ControllerProductAdmin.getAllProduct);
routes.post('/add', ControllerProductAdmin.addProduct);
routes.get('/:id', ControllerProductAdmin.getProductById);
routes.put('/:productId', ControllerProductAdmin.editProduct);
routes.delete('/:productId', ControllerProductAdmin.deleteProduct);

// route for get all product user
// route for get product by slug user
module.exports = routes;
