// routes/usuarioRoutes.js
const express = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.post('/registrar', UsuarioController.registrar);
router.post('/login', UsuarioController.autenticar);

module.exports = router;
