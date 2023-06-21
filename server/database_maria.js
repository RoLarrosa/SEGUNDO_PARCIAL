require('dotenv/config.js');
const mariadb = require('mariadb');

const pool = mariadb.createPool({
	host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    database: process.env.DATABASE_NAME || 'test',
});


module.exports= {pool}