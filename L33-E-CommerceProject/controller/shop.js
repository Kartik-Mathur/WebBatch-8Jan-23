const Products = require('../models/products');
const Users = require('../models/user');

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
        next(err);
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


module.exports.getAddToCartById = async (req, res, next) => {
    try {
        const { id } = req.params;
        let cart = req.user.cart;
        let indx = -1;
        cart.forEach((item, i) => {
            if (item.id == id) {
                indx = i;
            }
        })
        if (indx == -1) {
            cart.unshift({
                id: id,
                quantity: 1
            })
        }
        else {
            cart[indx].quantity++;
        }

        // To make sure that db mei changes ho jaaye we need to save it
        req.user.save();
        res.redirect('/shop/cart');
    } catch (err) {
        next(err);
    }
}

module.exports.getCart = async (req, res, next) => {
    try {
        const { id } = req.params;
        let user = await Users.findOne({ _id: req.user._id }).populate('cart.id');

        console.log(user.cart);
        let totalPrice = 0;
        user.cart.forEach((item) => {
            totalPrice += item.id.price * item.quantity;
        })
        res.render('shop/cart', {
            cart: user.cart,
            totalPrice
        });
    } catch (err) {
        next(err);
    }
}


module.exports.getIncrease = async (req, res, next) => {
    const { id } = req.params;
    let cart = req.user.cart;
    let indx;
    cart.forEach((item, i) => {
        if (item.id == id) {
            indx = i;
        }
    })

    cart[indx].quantity++;
    req.user.save();
    try {
        let user = await Users.findOne({ _id: req.user._id }).populate('cart.id');
        let totalPrice = 0;
        user.cart.forEach((item) => {
            totalPrice += item.id.price * item.quantity;
        })
        res.send({
            id: user.cart,
            totalPrice
        });
    } catch (err) {
        next(err);
    }

}


module.exports.getDecrease = async (req, res, next) => {
    const { id } = req.params;
    let cart = req.user.cart;
    let indx;
    cart.forEach((item, i) => {
        if (item.id == id) {
            indx = i;
        }
    })
    if (cart[indx].quantity > 1)
        cart[indx].quantity--;
    else if (cart[indx].quantity == 1)
        cart.splice(indx, 1);
    req.user.save();
    try {
        let user = await Users.findOne({ _id: req.user._id }).populate('cart.id');
        let totalPrice = 0;
        user.cart.forEach((item) => {
            totalPrice += item.id.price * item.quantity;
        })
        res.send({
            id: user.cart,
            totalPrice
        });
    } catch (err) {
        next(err);
    }
}


module.exports.getCartBuy = async (req, res, next) => {
    try {
        let user = await Users.findOne({ _id: req.user._id }).populate('cart.id');
        let cart = user.cart;

        let myOrder = req.user.orders;
        console.log(myOrder);
        
        console.log("Before",myOrder);
        let newOrder = cart.map(item => {    
            let order = {};
            order.product = item.id;
            order.quantity = item.quantity;
            order.price = order.product.price * order.quantity;
            return order;
        })
        console.log("NEW ORDER",newOrder);
        myOrder.push(newOrder);
        // console.log(myOrder[0]);
        // await Users.updateOne({
        //     _id: req.user._id
        // }, {
        //     orders: newOrder,
        //     cart: []
        // })
        // console.log(req.user.orders);
        res.send({
            message: "Order placed successfully",
            myOrder
        })
    } catch (err) {
        next(err);
    }
}




module.exports.getOrderHistory = (req, res, next) => {
    try {
        let orders = req.user.orders;
        res.send(orders);
    } catch (err) {

    }
}