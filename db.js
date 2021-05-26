const { Pool } = require('pg');

const pool = new Pool({
	host: 'localhost',
	port: 5432,
	user: 'viku',
	password: '',
	database: 'airmee2',
});

module.exports = pool;
