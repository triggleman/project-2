const axios = require('axios');

function getAllGyms(gym){
	console.log('does the axios work')
	const lat = gym.lat
	const lng = gym.lng
	const promise = axios({
		url: `https://maps.googleapis.com/maps/api/place/textsearch/json?location=${lat},${lng}&radius=5000&key=${process.env.GOOGLE_PLACE_KEY}`,
		method: 'GET',
	})
	return promise;
}

module.exports = { getAllGyms }