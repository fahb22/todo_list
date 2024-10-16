// controllers/usuarioController.js
const UsuarioService = require('../services/usuarioService');

const UsuarioController = {
    async registrar(req, res) {
        try {
            const usuario = await UsuarioService.registrar(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async autenticar(req, res) {
        try {
            const { email, senha } = req.body;
            const { token } = await UsuarioService.autenticar(email, senha);
            res.status(200).json({ token });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = UsuarioController;
