const path = require('path');
const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');

// router.get('/',adminController.getAdmin);
router.post('/add-restaurant', adminController.postAddRestaurant);
router.get('/restaurants', adminController.getRestaurants);
// router.get('/restaurant/:id', adminController.);


module.exports = router;