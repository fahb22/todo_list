// models/usuarioModel.js
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const pool = require('../database/db'); // Ajustado para o caminho correto

const Usuario = {
    async criar(usuario) {
        const hashedPassword = await bcrypt.hash(usuario.senha, 10);
        const result = await pool.query('INSERT INTO usuarios(nome, email, senha) VALUES($1, $2, $3) RETURNING *', 
            [usuario.nome, usuario.email, hashedPassword]);
        return result.rows[0];
    },

    async encontrarPorEmail(email) {
        const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        return result.rows[0];
    }
};

module.exports = Usuario;

