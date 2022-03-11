const fetch = require('node-fetch');
const controladorDONKI = {};

controladorDONKI.servicioCME = async (req, res) => {
    console.log("Ruta /donki/cme solicitada");
    const start_date = "2020-09-07";
    const end_date = "2020-09-08";
    const url = `https://api.nasa.gov/DONKI/CME?start_date=${start_date}&end_date=${end_date}&api_key=${process.env.API_KEY}`;

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

controladorDONKI.servicioCMEA = async (req, res) => {
    console.log("Ruta /donki/cmea solicitada");
    const start_date = "2016-09-01";
    const end_date = "2016-09-30";
    const mostAccurateOnly = true;
    const speed = 500;
    const halfAngle = 30;
    const catalog = "ALL";
    const url = `https://api.nasa.gov/DONKI/CMEAnalysis?startDate=${start_date}&endDate=${end_date}&mostAccurateOnly=${mostAccurateOnly}&speed=${speed}&halfAngle=${halfAngle}&catalog=${catalog}&api_key=${process.env.API_KEY}`;
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

controladorDONKI.servicioGST = async (req, res) => {
    console.log("Ruta /donki/gst solicitada");
    const start_date = "2020-09-01";
    const end_date = "2020-09-30";
    const url = `https://api.nasa.gov/DONKI/GST?startDate=${start_date}&endDate=${end_date}&api_key=${process.env.API_KEY}`;

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

controladorDONKI.servicioIPS = async (req, res) => {
    console.log("Ruta /donki/ips solicitada");
    const start_date = "2016-09-01";
    const end_date = "2016-09-30";
    const location = "Earth"
    const catalog = "ALL";
    const url = `https://api.nasa.gov/DONKI/CMEAnalysis?startDate=${start_date}&endDate=${end_date}&location=${location}&catalog=${catalog}&api_key=${process.env.API_KEY}`;
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

controladorDONKI.servicioFLR = async (req, res) => {
    console.log("Ruta /donki/flr solicitada");
    const start_date = "2016-01-01";
    const end_date = "2016-01-30";
    const url = `https://api.nasa.gov/DONKI/FLR?startDate=${start_date}&endDate=${end_date}&api_key=${process.env.API_KEY}`;

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

controladorDONKI.servicioSEP = async (req, res) => {
    console.log("Ruta /donki/sep solicitada");
    const start_date = "2016-01-01";
    const end_date = "2016-01-30";
    const url = `https://api.nasa.gov/DONKI/SEP?startDate=${start_date}&endDate=${end_date}&api_key=${process.env.API_KEY}`;

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

controladorDONKI.servicioMPC = async (req, res) => {
    console.log("Ruta /donki/mpc solicitada");
    const start_date = "2016-01-01";
    const end_date = "2016-03-31";
    const url = `https://api.nasa.gov/DONKI/MPC?startDate=${start_date}&endDate=${end_date}&api_key=${process.env.API_KEY}`;

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

controladorDONKI.servicioRBE = async (req, res) => {
    console.log("Ruta /donki/rbe solicitada");
    const start_date = "2016-01-01";
    const end_date = "2016-01-31";
    const url = `https://api.nasa.gov/DONKI/RBE?startDate=${start_date}&endDate=${end_date}&api_key=${process.env.API_KEY}`;

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

controladorDONKI.servicioHSS = async (req, res) => {
    console.log("Ruta /donki/hss solicitada");
    const start_date = "2016-01-01";
    const end_date = "2016-01-31";
    const url = `https://api.nasa.gov/DONKI/HSS?startDate=${start_date}&endDate=${end_date}&api_key=${process.env.API_KEY}`;

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

controladorDONKI.servicioWSA = async (req, res) => {
    console.log("Ruta /donki/wsa solicitada");
    const start_date = "2016-01-06";
    const end_date = "2016-01-06";
    const url = `https://api.nasa.gov/DONKI/WSAEnlilSimulations?startDate=${start_date}&endDate=${end_date}&api_key=${process.env.API_KEY}`;

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

module.exports = controladorDONKI;