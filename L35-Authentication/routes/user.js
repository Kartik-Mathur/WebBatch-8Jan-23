const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controller/user');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isLoggedOut = require('../middlewares/isLoggedOut');

router.get('/', userController.getHome);
router.get('/signup', isLoggedOut, userController.getSignup);
router.get('/login', userController.getLogin);
router.get('/profile', isLoggedIn, userController.getProfile);

router.get('/logout', isLoggedIn, userController.getLogout);
router.post('/signup', isLoggedOut, userController.postSignup);
router.post('/login', isLoggedOut, userController.postLogin);


module.exports = router;