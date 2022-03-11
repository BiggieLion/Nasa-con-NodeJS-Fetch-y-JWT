//Programa para crear los tokens de los usuarios
const jwt = require("jsonwebtoken");
const moduloCreacion = {};

moduloCreacion.generarToken = (user) => {
    return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: 300 }); //Generamos el token con una duracion de 5 minutos
};
module.exports = moduloCreacion;