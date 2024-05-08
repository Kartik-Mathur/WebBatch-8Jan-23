const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controller/user');
router.get('/', userController.getHome);
router.get('/login', userController.getLogin);
router.get('/signup', userController.getSignup);

// router.post('/login', (req, res, next) => {});
router.post('/signup', userController.postSignup);


module.exports = router;