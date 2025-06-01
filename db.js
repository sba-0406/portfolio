// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',             // your PostgreSQL username
  host: 'localhost',
  database: 'portfolio',     // your PostgreSQL database
  password: '$BAlisha2004',     // your PostgreSQL password
  port: 5432,                   // default PostgreSQL port
});

module.exports = pool;
