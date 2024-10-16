// testRedis.js
require('dotenv').config(); // Carregar as variáveis de ambiente
const { createClient } = require('redis'); // Ajuste para a nova importação do Redis

// Criando um cliente Redis usando a URL da variável de ambiente
const redisClient = createClient({
    url: process.env.REDIS_URL, // URL do Redis a partir do .env
});

// Conectando ao Redis
redisClient.connect().then(() => {
    console.log('Conectado ao Redis');

    // Testar armazenamento e recuperação
    return redisClient.set('teste', 'Olá, Redis!'); // Armazenando um valor
}).then(res => {
    console.log('Resposta SET:', res); // Esperado: OK

    // Recuperar a chave
    return redisClient.get('teste');
}).then(value => {
    console.log('Valor da chave "teste":', value); // Esperado: "Olá, Redis!"
}).catch(err => {
    console.error('Erro:', err); // Para qualquer erro que ocorrer
}).finally(() => {
    // Fechar a conexão após o teste
    redisClient.quit();
});
