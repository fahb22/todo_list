// controllers/tarefaController.js
const TarefaService = require('../services/tarefaService');

const TarefaController = {
    async adicionar(req, res) {
        try {
            const { titulo } = req.body;
            const novaTarefa = await TarefaService.adicionarTarefa(titulo);
            res.status(201).json(novaTarefa);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async listar(req, res) {
        try {
            const tarefas = await TarefaService.listarTarefas();
            res.status(200).json(tarefas);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async atualizar(req, res) {
        const { id } = req.params;
        const { status } = req.body;
        try {
            const tarefaAtualizada = await TarefaService.atualizarTarefa(id, status);
            res.status(200).json(tarefaAtualizada);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async remover(req, res) {
        const { id } = req.params;
        try {
            await TarefaService.removerTarefa(id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = TarefaController;
