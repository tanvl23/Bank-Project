const Pool = require("pg").Pool;
const pool = new Pool({
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    max: 20,
    idleTimeoutMillis: 1000,
});

module.exports = { pool };