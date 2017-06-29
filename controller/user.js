//this a template
const User = require('../models/user');
const router = require('express').Router();
const passport = require('passport');

// const controller = require('./controller');
const auth = require('../services/auth');

// ----------------------------------------
// users index

router.post(
    '/',
    passport.authenticate(
        'local-signup', {
            failureRedirect: '/user/new',
            successRedirect: '/user/profile'
        }
    )
);

// ----------------------------------------
// register new user

router.get('/new', (req, res) => {
    console.log('REGISTER NEW USER ROUTE WORKS');
    res.render('user/new');
});

// ----------------------------------------
// user logout

router.get('/logout', (req, res) => {
    console.log('THE LOGOUT ROUTE WORKS');
    req.logout();
    res.redirect('/');
});

// ----------------------------------------
// user login

router.get('/login', (req, res) => {
    console.log('THE LOGIN ROUTE WORKS');
    res.render('user/login');
});

router.post('/login', passport.authenticate(
    'local-login', {
        failureRedirect: '/user/login',
        successRedirect: '/user/profile'
    }
));




// ----------------------------------------
// user profile

router.get(
    '/profile',
    auth.restrict,
    (req, res) => {
        console.log('in handler for users/profile');
        console.log('req.user:');
        console.log(req.user);
        User
            .findByEmail(req.user.email)
            .then((user) => {
                res.render(
                    'user/profile', { user: user }
                );
            })
            .catch(err => console.log('ERROR:', err));
    }
);

//------------------------------------------
//user favorites

router.get('/favorites', auth.restrict, (req, res) => {
    res.render('user/favorite');
})



module.exports = router;
