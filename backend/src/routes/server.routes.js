const express = require('express');
const router = express.Router();

const gastos = require('../controllers/gastos.controllers');
const usuarios = require('../controllers/usuarios.controllers');

router.get('/misitio/gastos', gastos.getGastos);
router.post('/misitio/gastos', gastos.addGasto);
router.put('/misitio/gastos/:id', gastos.updateGasto);
router.delete('/misitio/gastos/:id', gastos.deleteGasto);


router.get('/misitio/usuarios', usuarios.getUsuarios);
router.post('/misitio/usuarios', usuarios.addUsuario);


router.get('/misitio', (req, res) => {
    res.send('Bienvenido al backend de calculo gastos')
})


router.get('/misitio/about', (req, res) => {
    res.send('acerca de mi sitio')
})

//quiero ahora enviar un json
/*router.get('/misitio/gastos', (req, res) => {
    res.json({
        gasto:'Salud',
        monto:14575.60,
        informacion:'Corresponde a consultas médicas, pagos de seguros, medicinas'
    })
})*/

/*router.post('/misitio/gastos', (req, res) => {
    res.send('Registro Gastos')
})

router.put('/misitio/gastos', (req, res) => {
    res.send('Actualización de Gastos')
})*/  

router.get('/misitio/contacto', (req, res) => {
    res.sendFile('./img.jpg', { root: __dirname })
})

router.use((req, res) => {
    res.status(404).send('Página no encontrada')
})

module.exports = router;