const {Router} = require('express');
const verificador = require('../middlewares/verificar.jwt');
const DONKIControlodar = require('../controllers/donki.controller');

const router = Router();

router.get('/donki', (req, res) => {
    res.send("Rutas: /donki/cme, /donki/cmea, /donki/gst, /donki/ips, /donki/flr, /donki/sep, /donki/mpc, /donki/rbe, /donki/hss, /donki/wsa");
});

router.get('/donki/cme', verificador.verificarToken, DONKIControlodar.servicioCME);
router.get('/donki/cmea', verificador.verificarToken, DONKIControlodar.servicioCMEA);
router.get('/donki/gst', verificador.verificarToken, DONKIControlodar.servicioGST);
router.get('/donki/ips', verificador.verificarToken, DONKIControlodar.servicioIPS);
router.get('/donki/flr', verificador.verificarToken, DONKIControlodar.servicioFLR);
router.get('/donki/sep', verificador.verificarToken, DONKIControlodar.servicioSEP);
router.get('/donki/mpc', verificador.verificarToken, DONKIControlodar.servicioMPC);
router.get('/donki/rbe', verificador.verificarToken, DONKIControlodar.servicioRBE);
router.get('/donki/hss', verificador.verificarToken, DONKIControlodar.servicioHSS);
router.get('/donki/wsa', verificador.verificarToken, DONKIControlodar.servicioWSA);

module.exports = router;