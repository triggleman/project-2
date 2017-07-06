const router = require('express').Router();
const yelpGym = require('../services/yelpgyms');
const auth = require('../services/auth');
const passport = require('passport');
const gymModel = require('../models/gyms');

//renders the app with map
router.get('/search', (req, res) => {
  console.log('search route works');
        res.render('app/index')
})











module.exports = router;
