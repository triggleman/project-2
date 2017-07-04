$(()=>{
	console.log('script is working')



  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.739998, lng: -73.990098},
    zoom: 12
  });

// 	google.maps.event.addListener(map, 'click', getLatLong)

//   function getLatLong(e){
//     let myLatLng = e.latLng,
//     	lat = myLatLng.lat(),
//     	lng = myLatLng.lng();
//     latLongArr = [];
//     latLongArr.push(lat,lng);
//     console.log(latLongArr);
//     $('input[name=createLatLong]').val(latLongArr)
//     generateMarkers()
//   }


// $('#search').on('submit', (e)=>{
//     e.preventDefault();
//     const gym = $('#search-input').val();
//     console.log(gym);
//   });

	



  });

