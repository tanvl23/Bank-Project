const Pool = require("pg").Pool;
const pool = new Pool({
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    // url: process.env.REACT_APP_MASTER_API,
    max: 20,
    idleTimeoutMillis: 1000,
});

pool.on("error", (err) => {
    console.error("🔥 DB Connection Error:", err);
  });
  
  module.exports = {
    query: (text, params) => pool.query(text, params),
  };

module.exports = { pool };