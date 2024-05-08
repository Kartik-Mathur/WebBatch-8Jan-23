const Users = require('../models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.getLogin = (req, res, next) => {
    res.render('login');
}

module.exports.getSignup = (req, res, next) => {
    res.render('signup');
}

module.exports.getHome = (req, res, next) => {
    res.render('home');
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
            }catch(err){
                return res.status("500").json("Cannot create a user right now!");
            }
        });

    } catch (err) {
        next(err);
    }
}