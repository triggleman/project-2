const pgp = require('pg-promise')();

// configuration object
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'gym_crud',
});

module.exports = db;