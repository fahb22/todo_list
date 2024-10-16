// app.js
require('dotenv').config(); // Carregar as variáveis de ambiente
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tarefaRoutes = require('./routes/tarefaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const redis = require('redis'); // Importando o Redis

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Criando um cliente Redis
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST, // Host do Redis a partir das variáveis de ambiente
    port: process.env.REDIS_PORT, // Porta do Redis a partir das variáveis de ambiente
});

// Verificando a conexão com o Redis
redisClient.on('connect', () => {
    console.log('Conectado ao Redis');
});

redisClient.on('error', (err) => {
    console.error('Erro de Redis: ', err);
});

// Rotas
app.use('/api/tarefas', tarefaRoutes);
app.use('/api/usuarios', usuarioRoutes);

module.exports = app;
