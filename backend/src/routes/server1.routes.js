const express = require('express');
const router = express.Router();

const gasto = require('../controllers/gastos.controlllers');
const usuario=require('../controllers/usuarios.controllers');

router.get('/misitio/gastos', gasto.getGastos);
router.post('/misitio/gastos', gasto.addGasto);

router.get('/misitio/usuarios', usuario.getUsuarios);
router.post('/misitio/usuarios', usuario.addUsuarios);