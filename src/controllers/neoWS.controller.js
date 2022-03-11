const fetch = require('node-fetch');
const controladorNeoWS = {};

controladorNeoWS.servicioFeed = async (req, res) => {
    console.log("Ruta /neows/feed solicitada");
    const start_date = "2020-09-07";
    const end_date = "2020-09-08";
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${process.env.API_KEY}`;

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

controladorNeoWS.servicioLookup = async (req, res) => {
    console.log("Ruta /neows/lookup solicitada");
    const asteroidId = 3542519;
    const url = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${process.env.API_KEY}`;

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

controladorNeoWS.servicioBrowse = async (req, res) => {
    console.log("Ruta /neows/browse solicitada");
    const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.API_KEY}`;

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


module.exports = controladorNeoWS;