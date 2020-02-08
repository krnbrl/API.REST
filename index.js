'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var puerto = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/curso-angular', (err, res) => {
    if(err){
        throw err;
    }else{ 
        console.log("La base se conecto y esta corriendo");

        app.listen(puerto, function(){
            console.log("El servidor esta escuchando");
        });
    }
});
