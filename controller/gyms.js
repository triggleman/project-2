const router = require('express').Router();
const gym = require('../models/gyms');
const auth = require('../services/auth');
const passport = require('passport');

router.get('/', auth.restrict, (req, res) => {
	console.log('app router get route works')
  let renderObj = {};
  gym
  	.getAllGyms()
  	.then((gym) => {
  		console.log('getting getAllGyms works');
  		console.log(gym.data)
  		renderObj.gyms = gym.data
  		res.render('app/index');
  	})
  	.catch((error) => {
				console.log(error)
			})
})

module.exports = router;
