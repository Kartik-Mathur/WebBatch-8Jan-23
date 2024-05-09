const path = require('path');
const express = require('express');
const router = express.Router();

const adminController = require('../controller/admin');

// GET REQUESTS
router.get('/',adminController.getAdminHome);
router.get('/products/all', adminController.getProductsAll);
router.get('/products/add', adminController.getProductsAdd);
router.get('/products/update/:id', adminController.getProductsUpdate);
// router.get('/products/:id',)
router.get('/products/delete/:id',adminController.getDeleteProductById);


router.post('/products/add', adminController.postProductsAdd);
router.post('/products/update', adminController.postProductUpdate);

module.exports = router;