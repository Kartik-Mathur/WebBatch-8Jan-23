const path = require('path');
const express = require('express');
const router = express.Router();

const adminController = require('../controller/products');

// GET REQUESTS
router.get('/products/all', adminController.getProductsAll);
// router.get('/products/:id',)
// router.get('/products/delete/:id',)

router.post('/products/add', adminController.postProductsAdd);
// router.post('/products/update', );


module.exports = router;