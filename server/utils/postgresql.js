const promise = require('bluebird');

const options = {
	promiseLib: promise
};

const pgp = require('pg-promise')(options);
pgp.pg.types.setTypeParser(1114, s=>s);
const connectionString = {
	host:'localhost',
	port: 5433,
	database: 'pension',
	user: 'postgres',
	password: '19315658'
};

const db = pgp(connectionString);
module.exports = db;
