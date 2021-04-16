const { Pool } = require("pg");

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '666www666',
    database: 'pern-todo-app-db',
    port: 5432,
});

module.exports = pool;