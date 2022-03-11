const {Router} = require('express');
const verificador = require('../middlewares/verificar.jwt');
const earthControlador = require('../controllers/earth.controller');

const router = Router();

router.get('/earth', (req, res) => {
    res.send("Rutas: /earth/imagery, /earth/assets");
});

router.get('/earth/assets', verificador.verificarToken, earthControlador.servicioAssets);

module.exports = router;