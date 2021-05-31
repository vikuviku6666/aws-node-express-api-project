const { Pool } = require('pg');

const pool = new Pool({
	host: 'localhost',
	port: 5432,
	user: 'viku',
	password: process.env.PGPASSWORD,
	database: 'airmee2',
});

module.exports = pool;
