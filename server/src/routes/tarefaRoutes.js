// routes/tarefaRoutes.js
const express = require('express');
const TarefaController = require('../controllers/tarefaController');
const auth = require('../middlewares/auth'); // Corrigido para 'middlewares'

const router = express.Router();

router.post('/', auth, TarefaController.adicionar); // Apenas usuários autenticados
router.get('/', auth, TarefaController.listar); // Apenas usuários autenticados
router.put('/:id', auth, TarefaController.atualizar); // Apenas usuários autenticados
router.delete('/:id', auth, TarefaController.remover); // Apenas usuários autenticados

module.exports = router;
