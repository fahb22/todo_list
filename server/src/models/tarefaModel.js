// models/tarefaModel.js
const pool = require('../database/db'); // Importando o pool do db.js

const Tarefa = {
    async adicionar(titulo) {
        if (!titulo || typeof titulo !== 'string' || titulo.trim() === '') {
            throw new Error('O título da tarefa não pode estar vazio.');
        }
        const result = await pool.query('INSERT INTO tarefas(titulo) VALUES($1) RETURNING *', [titulo]);
        return result.rows[0];
    },

    async listar() {
        const result = await pool.query('SELECT * FROM tarefas');
        return result.rows;
    },

    async atualizar(id, status) {
        const result = await pool.query('UPDATE tarefas SET status = $1 WHERE id = $2 RETURNING *', [status, id]);
        if (result.rowCount === 0) {
            throw new Error('Tarefa não encontrada');
        }
        return result.rows[0];
    },

    async remover(id) {
        const result = await pool.query('DELETE FROM tarefas WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            throw new Error('Tarefa não encontrada');
        }
    }
};

module.exports = Tarefa;
