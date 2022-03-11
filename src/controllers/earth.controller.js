const fetch = require('node-fetch');
const controladorEarth = {};

controladorEarth.servicioAssets = async (req, res) => {
    console.log("Ruta /earth/assets solicitada");
    const lat = 19.43686;
    const lon = -99.21206;
    const date = "2021-12-11";
    const dim = 0.15;
    const url = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&dim=${dim}&api_key=${process.env.API_KEY}`

    const options = { "method": "GET" };

    const respuesta = await fetch(url, options)
    .then((result) => result.json())
    .catch((err) => {
        console.log({
            "mensaje": "ERROR",
            error: err
        });
    });
    res.json(respuesta);
};

module.exports = controladorEarth