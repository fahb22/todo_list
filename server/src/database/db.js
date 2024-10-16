// database/db.js
require('dotenv').config(); // Carregar as variáveis de ambiente
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,       // Usar a variável de ambiente
    host: process.env.DB_HOST,       // Usar a variável de ambiente
    database: process.env.DB_NAME,   // Usar a variável de ambiente
    password: process.env.DB_PASSWORD,// Usar a variável de ambiente
    port: process.env.DB_PORT,       // Usar a variável de ambiente
});

module.exports = pool;
