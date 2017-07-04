$(()=>{
	console.log('script is working')

$('#search').on('submit', (e)=>{
    e.preventDefault();
    const gym = $('#search-input').val();
    console.log(gym);
  });

	



  });

