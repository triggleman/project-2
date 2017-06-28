const pgp = require('pg-promise')({}),
config = process.env.DATABASE_URL || 'postgres://toddriggleman@localhost:5432/tv_haus',
db = pgp(config);

module.exports = db;