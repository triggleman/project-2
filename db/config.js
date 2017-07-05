const pgp = require('pg-promise')();

// configuration object
var db = pgp(process.env.DATABASE_URL || 'postgres://toddriggleman@localhost:5432/gym_crud');

module.exports = db;