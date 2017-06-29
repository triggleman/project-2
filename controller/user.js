//This is a auth template


// const User = require('../models/user');
const router = require('express').Router();
const passport = require('passport');

const auth = require('../services/auth');

router.post(
    '/',
    passport.authenticate(
        'local-signup', {
            failureRedirect: '/user/new',
            successRedirect: '/shows'
        }
    )
);

// register new user
router.get('/new', (req, res) => {
    res.render('user/new');
});

// user logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// user login
router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', passport.authenticate(
    'local-login', {
        failureRedirect: '/user/login',
        successRedirect: '/shows'
    }
));

module.exports = router;
