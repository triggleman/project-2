const axios = require('axios');
const db = require('../db/config');

function getAllGyms(address){
	console.log('does the axios work')
	const promise = axios({
		url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${address}&radius=5000&key=${process.env.GOOGLE_PLACE_KEY}`,
		method: 'GET',
	})
	return promise;
}


function findById(id){
	return db.oneOrNone(`SELECT * FROM gyms WHERE id = $1;`, [id]);
}

function update(gym, gymID, userId){
	return db.one(`UPDATE gyms SET name = $1, address = $2, gym_id = $3 WHERE id = $4 AND user_id = $5 RETURNING id`, [gyms.name, gyms.address, gyms.gym_id, gymID, userId]);
}

function destroy(gym_id){
	return db.one(`DELETE FROM gyms WHERE gym_id = $1`, [gym_id]);
}

module.exports = { getAllGyms, findById, update, destroy }