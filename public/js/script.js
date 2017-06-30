$(()=>{
	console.log('script is working')

$('#search').on('submit', (e)=>{
    e.preventDefault();
    const city = $('#search-input').val();
    console.log(city);
  });

	function findGyms(gym){
		// const key = headers:{
		// 	'Authorization': 'Bearer xLfVhkUaMnwpjkcRyHmqsoqnAfaUcfYP51bvm6in3UMXpNwkXXJahFlpOrJVNlZEsjsosAM__vc3Mpg1QA1AbSd7pqQsW4XkkjRKCVDBWoGivzQiOBL3B3IEFlBVWXYx'
		// };
		let url = 'https://api.yelp.com/v3/businesses/search?term=gyms&latitude=40.730610&longitude=-73.935242';
		axios.get(url)
			.then((response) => {
				console.log(response.data.businesses)
			})

	}

  });

