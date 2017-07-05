const axios = require('axios');
const db = require('../db/config');



function findById(id){
	return db.oneOrNone(`SELECT * FROM gyms WHERE id = $1;`, [id])
}


module.exports = { findById }