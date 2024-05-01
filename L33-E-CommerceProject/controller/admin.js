const Products = require('../models/products');

module.exports.getAdminHome = (req, res, next) => {
    res.render('admin/home', {
        isAdmin: true
    });
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
        res.redirect('/admin/products/all', {
            isAdmin: true
        });
    }
    catch (err) {
        res.send(err)
    }
}

module.exports.getProductsAll = async (req, res, next) => {
    const products = await Products.find();
    console.log(products);
    let data = {};

    products.forEach(product => {
        let arr = data[product.category] || [];
        arr.push(product);
        data[product.category] = arr;
    });
    // res.send(data);
    res.render('admin/products-list', {
        products: data,
        isAdmin: true
    });
}

module.exports.getProductsAdd = (req, res, next) => {
    res.render('admin/add-product', {
        isAdmin: true
    });
}

module.exports.getProductsUpdate = async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await Products.findById(id);
        res.render('admin/update-product', {
            product,
            isAdmin: true
        });
    }
    catch (err) {
        next(err);
    }
}


module.exports.postProductUpdate = async (req, res, next) => {
    const { name, price, description, imageUrl, seller, id } = req.body;

    try {
        let p = await Products.findById(id);
        p.name = name;
        p.price = price;
        p.description = description;
        p.imageUrl = imageUrl;
        p.seller = seller;
        await p.save();

        res.redirect('/admin/products/all');
    }
    catch (err) {
        res.send(err)
    }
}

module.exports.getDeleteProductById = async (req, res, next) => {
    const { id } = req.params;

    try {
        let p = await Products.deleteOne({ _id: id });
        res.redirect('/admin/products/all', {
            isAdmin: true
        });
    }
    catch (err) {
        res.send(err)
    }
}