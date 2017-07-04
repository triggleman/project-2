const axios = require('axios');

function getAllGyms(city){
	console.log('does the axios work')
	const promise = axios({
		url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=gyms+in+${req.body.city}&radius=5000&key=${process.env.GOOGLE_PLACE_KEY}`,
		method: 'GET',

	})
	return promise;
}

// function gymLocation(){
// 	const promise = axios({
// 		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GEOCODING_KEY}`,
// 		method: 'GET'
// 	})
// 	return promise;
// }



module.exports = { getAllGyms }