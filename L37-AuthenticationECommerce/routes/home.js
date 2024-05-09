const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');

const homeController = require('../controller/home');
router.get('/', homeController.getHome);
router.get('/login', homeController.getLogin);

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
    });

router.get('/signup',homeController.getSignup);
router.post('/signup',homeController.postSignup);

module.exports = router;