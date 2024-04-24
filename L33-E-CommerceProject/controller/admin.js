const Products = require('../models/products');

module.exports.getAdminHome = (req,res,next)=>{
    res.render('admin/home');
}

module.exports.postProductsAdd = async (req, res, next) => {
    const { name, price, description, imageUrl, seller } = req.body;
    try {
        await Products.create({
            name,
            price,
            description,
            imageUrl,
            seller
        });
        res.redirect('/admin/products/all');
    }
    catch(err){
        res.send(err)
    }
}

module.exports.getProductsAll = async (req, res, next) => {
    const products = await Products.find();
    console.log(products)
    // res.send(products);
    res.render('admin/products-list',{
        products
    });
}

module.exports.getProductsAdd = (req,res,next)=>{
    res.render('admin/add-product');
}