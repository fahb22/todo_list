// services/tarefaService.js
const Tarefa = require('../models/tarefaModel');

const TarefaService = {
    async adicionarTarefa(titulo) {
        if (!titulo) {
            throw new Error('O título da tarefa não pode estar vazio.');
        }
        return await Tarefa.adicionar(titulo);
    },

    async listarTarefas() {
        return await Tarefa.listar();
    },

    async atualizarTarefa(id, status) {
        return await Tarefa.atualizar(id, status);
    },

    async removerTarefa(id) {
        await Tarefa.remover(id);
    }
};

module.exports = TarefaService;
