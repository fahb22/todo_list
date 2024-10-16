// database/redis.js
require('dotenv').config(); // Carregar as variáveis de ambiente
const redis = require('redis');

const client = redis.createClient({
    host: process.env.REDIS_HOST, // Usar a variável de ambiente
    port: process.env.REDIS_PORT, // Usar a variável de ambiente
});

client.on('error', (err) => {
    console.error('Erro de Redis: ', err);
});

module.exports = client;
