const path = require('path');
const express = require('express');
const router = express.Router();

const shopController = require('../controller/shop');
router.get('/',shopController.getHome);

router.get('/products/all', shopController.getProductsAll);
router.get('/products/:id', shopController.getProductsById);

// router.get('/cart',);
// router.get('/cart/add',);


module.exports=router;