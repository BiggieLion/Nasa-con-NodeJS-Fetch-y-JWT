const express = require('express');
//Inicializadores
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 4000); //Configurando el puerto del server

//Middlewares
app.set(express.json());
app.set(express.urlencoded({extended: false}));//Configurar que todos los datos que lleguen seran JSON
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routers
app.use(require('./routes/index.routes')); //Pagina principal
app.use(require('./routes/apod.routes')); //APOD
app.use(require('./routes/neoWS.routes')); //NeoWS
app.use(require('./routes/donki.routes')); //DONKI
app.use(require('./routes/earth.routes')); //Earth
app.use(require('./routes/eonet.routes')); //EONET

module.exports = app;