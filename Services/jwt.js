'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave';

exports.createToken = function(user){
    var payload = {
      sub: user._id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      role: user.role,
      image: user.image,
      lat: moment().unix,
      exp: moment().add(2, 'hours').unix
    };

    return jwt.encode(payload, secret)
};