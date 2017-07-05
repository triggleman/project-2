$(()=>{
	console.log('script is working')

		//generate map
        var latlng = {lat: 40.739998, lng: -73.990098};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: latlng
        });

        //get an array of all the lat and lngs of each place


        addMarkers({cords:{lat: 40.73917, lng: -73.98734},
    content: '<h1>New York Health & Racquet Club</h1><a href="#">ADD TO FAVS</a>'}); 
        addMarkers({cords:{lat: 40.7398373481236, lng: -73.9851167052984},
    content: '<h1>Encore Fitness</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.74359, lng: -73.98758},
    content: ' <h1>24 Hour Fitness - Madison Square Park Ultra</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.7425194, lng: -73.9923019},
    content: ' <h1>New York Health & Racquet Club</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.741283416748, lng: -73.9904403686523},
    content: ' <h1>Rich Barretta Private Training</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.7393587, lng: -73.9928961},
    content: ' <h1>Gores Core Fitness</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.719078, lng: -73.988662},
    content: ' <h1>Ludlow Fitness</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.7369766235352, lng: -73.9802322387695},
    content: ' <h1>22nd Street Synergy Fitness</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.736702, lng: -73.9949493},
    content: ' <h1>CLAY Health Club + Spa</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.7406099, lng: -73.98586},
    content: ' <h1>Equinox Gramercy</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.7353647352968, lng: -73.9923860332572},
    content: ' <h1>Planet Fitness - Manhattan - Union Square</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.74551, lng: -73.98375},
    content: ' <h1>Tone House</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.7400017, lng: -73.9855728},
    content: ' <h1>New York Sports Clubs</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.7455594, lng: -73.9858969},
    content: ' <h1>Plush Fitness</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.7413418, lng: -73.9963784},
    content: ' <h1>The Works</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.7389916382769, lng: -73.9899986684418},
    content: ' <h1>Equinox Flatiron</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.746867, lng: -73.9973223},
    content: ' <h1>Blink Fitness</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.74147, lng: -74.0004},
    content: ' <h1>Brick New York</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.76845, lng: -73.9873999},
    content: ' <h1>New York Underground Fitness</h1><a href="#">ADD TO FAVS</a>'});
        addMarkers({cords:{lat: 40.7479169, lng: -73.9908574},
    content: ' <h1>Blink Fitness</h1><a href="#">ADD TO FAVS</a>'});
        //generate makers
        function addMarkers(item){
        	// console.log(coords)
        var marker = new google.maps.Marker({
          position: item.cords,
          map: map,
        });

        if(item.content){
        	let infoWindow = new google.maps.InfoWindow({
        		content: item.content
        	});
        	marker.addListener('click', () => {
        		infoWindow.open(map, marker);
        	});
        }
    }
      


//     $.ajax({
//     	method: 'POST',
//     	url: '/user/favorite',
//     	success: (response => {
//     		console.log(response)
// ;    	})
//     })
	



  });

