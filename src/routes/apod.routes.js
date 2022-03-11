const {Router} = require('express');
const verificador = require('../middlewares/verificar.jwt');
const apodControlador = require('../controllers/apod.controller');

const router = Router();

//Definiendo el metodo para cuando el cliente solicite la ruta /apod
router.get('/apod', verificador.verificarToken, apodControlador.servicioAPOD);

module.exports = router;