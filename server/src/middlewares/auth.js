const jwt = require('jsonwebtoken');
require('dotenv').config(); // Certifique-se de ter isso para carregar suas variáveis de ambiente

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não fornecido.' });
    }

    const token = authHeader.split(' ')[1]; // Obtém o token sem o "Bearer"

    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido.' });
    }

    try {
        // Use a chave do ambiente
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Segredo usado para verificar
        req.userId = decoded.id; // Decodifica o ID do usuário
        next(); // Prossegue com a requisição
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido.', details: error.message });
    }
};
