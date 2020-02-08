'use strict'

var express =  require('express');
var UserController = require('../Controllers/user-c');

var api = express.Router();
var md_auth = require('../Middlewares/auto');


api.get('/probando-controllers', md_auth.ensureAuth, UserController.prueba);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);

module.exports = api;