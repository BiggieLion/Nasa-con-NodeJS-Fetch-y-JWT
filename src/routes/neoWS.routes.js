const {Router} = require('express');
const verificador = require('../middlewares/verificar.jwt');
const NeoWSControlador = require('../controllers/neoWS.controller');

const router = Router();

router.get('/neows', (req, res) => {
    res.send("Rutas: /neows/feed, /neows/lookup, /neows/browse");
});

router.get('/neows/feed', verificador.verificarToken, NeoWSControlador.servicioFeed); /* Ruta /neows/feed */
router.get('/neows/lookup', verificador.verificarToken,NeoWSControlador.servicioLookup); /* Ruta /neows/lookup */
router.get('/neows/browse', verificador.verificarToken, NeoWSControlador.servicioBrowse); /* Ruta /neows/browse */

module.exports = router;