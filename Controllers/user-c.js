'use strict'

var User = require('../models-bd/user');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt'); 

function prueba(req, res){
    res.status(200).send({
        message: "Probando el controlador"
    });
}

function saveUser(req, res){
    var user = new User();
    
    var params =  req.body;
    console.log(params);

    /*user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';

    if(params.password){
        bcrypt.hash(params.password, null, null, function(err, hash){
            user.password = hash;
            if(user.name != null && user.surname != null && user.email != null){
                user.save((err, userStored) => {
                    if(err){
                        res.status(500).send({
                            message: 'Error al guardas los datos'
                        }); 
                    }else{
                        if(!userStored){
                            res.status(404).send({
                                message: 'No se registro el usuario'
                            }); 
                        }else{
                            res.status(200).send({
                                user: userStored
                            }); 
                        }
                    }
                });
            }else{
                res.status(200).send({
                    message: 'No seas wey, dame datoos'
                }); 
            }
        });
    }else{
        res.status(500).send({
            message: 'Introduce contraseña'
        });
    }*/
}

function loginUser(req, res){
    var params = req.body;

    var email = params.email;
    var password = params.password;

    User.findOne({email: email.toLowerCase()}, (err, User) => {
            if(err){
                res.status(500).send({
                    message: 'Error en la consulta'
                });
            }else{
                if(!User){
                    res.status(404).send({
                        message: 'Usuario no existente en la base de datos'
                    });  
                }else{
                    bcrypt.compare(password, User.password, function(err, check){
                        if(check){
                            if(params.gethash){
                                res.status(200).send({
                                    token: jwt.createToken(User) 
                                });
                            }
                        }else{
                            res.status(200).send({
                                message: 'Llaves incorrectas'
                            });
                        }
                    });
                }
            }
        }
    );
}

module.exports = {
    prueba,
    saveUser,
    loginUser
};