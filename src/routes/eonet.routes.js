const {Router} = require('express');
const verificador = require('../middlewares/verificar.jwt');
const eonetControlador = require('../controllers/eonet.controller');

const router = Router();

router.get('/eonet', (req, res) => {
    res.send("Rutas: /eonet/events, /eonet/events/geojson, /eonet/categories, /eonet/layers");
});

router.get('/eonet/events', verificador.verificarToken, eonetControlador.servicioEvents);
router.get('/eonet/events/geojson', verificador.verificarToken, eonetControlador.servicioEventsGEOJSON);
router.get('/eonet/categories', verificador.verificarToken, eonetControlador.servicioCategories);
router.get('/eonet/layers', verificador.verificarToken, eonetControlador.servicioLayers);

module.exports = router;