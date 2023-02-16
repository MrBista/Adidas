const ControllerAdmin = require('../controllers/admin');
const express = require('express');
const routes = express.Router();
routes.post('/register', ControllerAdmin.register);
routes.post('/login', ControllerAdmin.login);

module.exports = routes;
