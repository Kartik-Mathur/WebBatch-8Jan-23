const Products = require('../models/products');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Users = require('../models/user');
const { isLoggedIn } = require('../middlewares/isLoggedIn');

module.exports.getLogin = (req,res,next)=>{
    if(req.isAuthenticated())return res.redirect('/profile');
    res.render('login');
}

module.exports.getHome= async(req, res, next) => {
    
    if(!req.isAuthenticated()) return res.redirect('/login');
    
    try{
        let products = await Products.find();
        const {getProductsCategoryWise} = require('../utils/library')
        products = getProductsCategoryWise(products);
        
        res.render('index',{
            products,
            isAdmin: (req.user.role == 'admin') ? true: false,
            isLoggedIn: true
        });
    }
    catch(err){
        next(err);
    }
    
}

module.exports.getSignup = (req,res,next)=>{
    if(req.isAuthenticated())return res.redirect('/profile');
    res.render('signup')
}

module.exports.postSignup = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        let user = await Users.findOne({ username });
        if (user) {
            return res.render('signup', {
                msg: "This username already exists try another one"
            })
        }

        bcrypt.hash(password, saltRounds, async function (err, hash) {
            try {
                user = await Users.create({
                    username,
                    password: hash
                });

                res.redirect('/login');
            } catch (err) {
                return res.status("500").json("Cannot create a user right now!");
            }
        });

    } catch (err) {
        next(err);
    }
}