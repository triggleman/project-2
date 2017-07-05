const router = require('express').Router();
const yelpGym = require('../services/yelpgyms');
const auth = require('../services/auth');
const passport = require('passport');
const gymModel = require('../models/gyms');


router.get('/search', (req, res) => {
  console.log('search route works');
  let renderObj = {}
    yelpGym
      .yelpGyms()
      .then((data) => {
        console.log(data.data.businesses);
        // renderObj = data.data.businesses
        res.render('app/index', renderObj)
      })
})







// router.post('/', (req, res) => {
// 	console.log('app router get route works')
//   axios({
//     method: 'GET',
//     url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=gyms+in${req.body.city}&key${process.env.GEOCODING_KEY}`
//   })
//   	.then((gym) => {
//   		console.log('getting getAllGyms works');
//   		res.json(data.data.results);
//   	})
//   	.catch((error) => {
// 				console.log(error)
// 			})
// })

module.exports = router;
