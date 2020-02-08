var express = require('express');
var bodyP = require('body-parser');

var app = express();

//Rutas
var user_router = require('./routers/user');

app.use(bodyP.urlencoded({extended: false}));
app.use(bodyP.json());

//Ruta base
app.use('/api', user_router);

 

module.exports = app;
