const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controller/user');
router.get('/', userController.getHome);
router.get('/login', userController.getLogin);
router.get('/signup', userController.getSignup);

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/profile');
    });

    
router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

router.post('/signup', userController.postSignup);

router.get('/profile', userController.getProfile);


module.exports = router;