'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave';

exports.ensureAuth = function(req, res, next){
    if(!req.headers.authorization){
        res.status(403).send({
            message: 'Autorización denegada'
        });
    }

    var token = req.headers.authorization.replace(/[' "]+/g, '');

    try {
        var payload = jwt.decode(token, secret);

        if(payload.exp <= moment().unix()){
            return res.status(500).send({
                message: 'Ups! La sesión ha expirado, por favor ingresa nuevamente'
            });
        }

    } catch (ex) {
        console.log(ex);
        return res.status(404).send({
            message: 'Entrada no válida'
        });
    }

    req.user = payload;

    next(); 
};
