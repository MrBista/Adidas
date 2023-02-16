const express = require('express');
const ControllerProductAdmin = require('../controllers/productAdmin');
const { authentication } = require('../middlewares/auth');
const routes = express.Router();
const adminRoutes = require('./admin');

routes.use(adminRoutes);
routes.use(authentication);
// route for get all product admin
routes.get('/', ControllerProductAdmin.getAllProduct);
// route for get product by id admin
routes.get('/:id', ControllerProductAdmin.getProductById);
routes.post('/add', ControllerProductAdmin.addProduct);

// route for get all product user
// route for get product by slug user
module.exports = routes;
