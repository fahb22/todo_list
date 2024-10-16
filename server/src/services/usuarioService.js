// services/usuarioService.js
const Usuario = require('../models/usuarioModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Certifique-se de que bcrypt está importado

// Defina sua chave secreta JWT aqui
const JWT_SECRET = 'my$up3rS3cure_JW7Token*Ch@ng3!Th1s'; 

const UsuarioService = {
    async registrar(usuario) {
        return await Usuario.criar(usuario);
    },

    async autenticar(email, senha) {
        const usuario = await Usuario.encontrarPorEmail(email);
        if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
            throw new Error('Email ou senha inválidos.');
        }
        // Gerando o token com a chave definida
        const token = jwt.sign({ id: usuario.id }, JWT_SECRET, { expiresIn: '1h' });
        return { token };
    }
};

module.exports = UsuarioService;

