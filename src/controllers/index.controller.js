const fetch = require("node-fetch");
const generador = require("../middlewares/crearToken.jwt");
const indexControlador = {};

indexControlador.servicioIndex = (req, res) => {
    res.json({
        "Bienvenida": "Bienvenido a la APP, si usted quiere acceder a las APIs dirigase a la siguiente ruta: /login",
        "Mensaje": "Las rutas de la App son: ",
        "Rutas": "Las rutas de esta APP son: APOD: /apod NeoWS Feed: /neows/feed/ NeoWS Lookup: /neows/lookup NeoWS browse: /neows/browse Earth: /earth"
    });
};

indexControlador.servicioLogin = (req, res) => {
    const { username } = req.body;
    const usuario = { "username": username };
    const token = generador.generarToken(usuario);
    res.status(200).json({token});
};
module.exports = indexControlador;