const router = require('express').Router();
const gym = require('../models/gyms');
const auth = require('../services/auth');
const passport = require('passport');

router.get('/', auth.restrict, (req, res) => {
  res.render('app/index');
})

module.exports = router;
