require('dotenv').config(); //Modulo para utilizar las variables de entorno
const express = require('express');
const { urlencoded } = require('express');
const app = require('./server'); //Importamos las configuraciones del server.js

app.listen(app.get('port'), () => {
    console.log("Servidor levantado en el puerto:", app.get('port'));
}); //Mensaje de que el server ha sido levantado y en que puerto