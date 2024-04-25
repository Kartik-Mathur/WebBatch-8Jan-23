const Products = require('../models/products');

module.exports.getProductsAll = async (req, res, next) => {
    try {
        let products = await Products.find({});
        const { getProductsCategoryWise } = require('../utils/library');
        let categoryProducts = getProductsCategoryWise(products);

    } catch (err) {

    }
}

module.exports.getProductsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        let product = await Products.findOne({ _id: id });
        res.render('shop/product-details', {
            product: product
        })


    } catch (err) {

    }
}

module.exports.getHome = async (req, res, next) => {
    try {
        let products = await Products.find({});
        const { getProductsCategoryWise } = require('../utils/library');
        let categoryProducts = getProductsCategoryWise(products);
        res.render('shop/home', {
            products: categoryProducts,
        })
    } catch (err) {

    }
}