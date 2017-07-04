const router = require('express').Router();
const gym = require('../models/gyms');
const auth = require('../services/auth');
const passport = require('passport');

router.get('/', auth.restrict, (res, req) => {
  console.log('is this working');
  let renderObj = {}
    gym
      .getAllGyms()
      .then((data) => {
        console.log(data);
        res.render('app/index');

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
