const axios = require('axios');

function yelpGyms(){
	const promise = axios({
		url: 'https://api.yelp.com/v3/businesses/search?term=gyms&latitude=40.739998&longitude=-73.990098',
		method: 'GET',
		headers: {'Authorization': 'Bearer xLfVhkUaMnwpjkcRyHmqsoqnAfaUcfYP51bvm6in3UMXpNwkXXJahFlpOrJVNlZEsjsosAM__vc3Mpg1QA1AbSd7pqQsW4XkkjRKCVDBWoGivzQiOBL3B3IEFlBVWXYx'}
	})
	return promise;
}



module.exports = { yelpGyms }