const fetch = require('node-fetch');
const controladorAPOD = {};

controladorAPOD.servicioAPOD = async (req, res) => {
    console.log("Ruta /apod solicitada");
    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;
    const options = { "method": "GET" };
    const respuesta = await fetch(url, options)
        .then((result) => result.json())
        .catch((err) => {
            console.log({
                "mensaje": "ERROR: ",
                error: err,
            });
        });
    console.log("RESPUESTA APOD: ", respuesta);
    res.send(respuesta);
};

module.exports = controladorAPOD;