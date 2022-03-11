//Programa para verificar tokens
const jwt = require("jsonwebtoken");
const moduloVerificador = {};

moduloVerificador.verificarToken = (req, res, next) => {
    const tokenAcceso = req.headers['auth'];
    if(!tokenAcceso) res.status(403).json({"error": "ACCESO DENEGADO", "motivo": "No mostró las credenciales necesarias"});

    else {
        jwt.verify(tokenAcceso, process.env.SECRET_KEY, (err, user) => {
            if(err) res.status(403).json({"error": "ACCESO DENEGADO", "motivo": "Credenciales incorrectas o expiradas"});
            else next();
        });
    }
};

module.exports = moduloVerificador;