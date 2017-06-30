const axios = require('axios');

function getAllGyms(){
	console.log('does the axios work')
	const promise = axios({
		url: 'https://api.yelp.com/v3/businesses/search?term=gyms&latitude=40.730610&longitude=-73.935242',
		method: 'GET',
		headers:{
			'Authorization': 'Bearer xLfVhkUaMnwpjkcRyHmqsoqnAfaUcfYP51bvm6in3UMXpNwkXXJahFlpOrJVNlZEsjsosAM__vc3Mpg1QA1AbSd7pqQsW4XkkjRKCVDBWoGivzQiOBL3B3IEFlBVWXYx'
		} 
	})
	return promise;
}



module.exports = { getAllGyms }