//Ruta para la pagina principal de la App
const {Router} = require('express');
const router = Router();
const controladorIndex = require('../controllers/index.controller')

router.get('/', controladorIndex.servicioIndex);

//Ruta para crear un user y generar un token    
router.post('/login', controladorIndex.servicioLogin);

module.exports = router;