const fetch = require('node-fetch');
const controladorEONET = {};

controladorEONET.servicioEvents = async (req, res) => {
    console.log("Ruta /eonet/events solicitada");
    const url = `https://eonet.gsfc.nasa.gov/api/v2.1/events?api_key=${process.env.APY_KEY}`;

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

controladorEONET.servicioEventsGEOJSON = async (req, res) => {
    console.log("Ruta /eonet/events/geojson solicitada");
    const url = `https://eonet.gsfc.nasa.gov/api/v3/events/geojson?api_key=${process.env.APY_KEY}`;

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

controladorEONET.servicioCategories = async (req, res) => {
    console.log("Ruta /eonet/categories solicitada");
    const url = `https://eonet.gsfc.nasa.gov/api/v3/categories?api_key=${process.env.APY_KEY}`;

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

controladorEONET.servicioLayers = async (req, res) => {
    console.log("Ruta /eonet/layers solicitada");
    const url = `https://eonet.gsfc.nasa.gov/api/v3/layers?api_key=${process.env.APY_KEY}`;

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

module.exports = controladorEONET;